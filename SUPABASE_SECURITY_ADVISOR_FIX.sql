-- Supabase Security Advisor remediation pack
-- Target warnings from screenshot:
-- 1) Function Search Path Mutable
-- 2) RLS Policy Always True
-- 3) Leaked Password Protection Disabled (dashboard setting, not SQL)

-- ============================================================
-- 0) Inspect current state (safe read-only)
-- ============================================================

-- Current policies on affected tables
select schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('options', 'questions', 'reactions', 'survey_responses', 'votes')
order by tablename, cmd, policyname;

-- Current function settings for affected functions
select n.nspname as schema_name,
       p.proname as function_name,
       pg_get_function_identity_arguments(p.oid) as args,
       array_to_string(coalesce(p.proconfig, '{}'), ', ') as function_config
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in ('handle_new_user', 'increment_vote', 'increment_question_vote', 'add_points')
order by p.proname;


-- ============================================================
-- 1) Fix: Function Search Path Mutable
-- ============================================================
-- Sets a fixed search_path on all matching function signatures in public schema.

DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT n.nspname as schema_name,
           p.proname as function_name,
           pg_get_function_identity_arguments(p.oid) as args
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public'
      AND p.proname IN ('handle_new_user', 'increment_vote', 'increment_question_vote', 'add_points')
  LOOP
    EXECUTE format(
      'ALTER FUNCTION %I.%I(%s) SET search_path = public, auth, extensions',
      r.schema_name,
      r.function_name,
      r.args
    );
  END LOOP;
END
$$;


-- ============================================================
-- 2) Fix: RLS Policy Always True
-- ============================================================
-- Replace permissive "USING (true)" / "WITH CHECK (true)" with stricter policies.
-- NOTE: This version allows only authenticated users.
-- If your app requires anonymous voting, see the optional section below.

-- Ensure RLS enabled
ALTER TABLE public.options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

-- Remove all existing policies on affected tables to avoid duplicate permissive rules
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT schemaname, tablename, policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename in ('options', 'questions', 'reactions', 'survey_responses', 'votes')
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I', r.policyname, r.schemaname, r.tablename);
  END LOOP;
END
$$;

-- Recreate minimum-safe policies (authenticated only)
-- Read policies
CREATE POLICY options_select_auth ON public.options
  FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY questions_select_auth ON public.questions
  FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY reactions_select_auth ON public.reactions
  FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY survey_responses_select_auth ON public.survey_responses
  FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY votes_select_auth ON public.votes
  FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Write policies
CREATE POLICY reactions_insert_auth ON public.reactions
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY survey_responses_insert_auth ON public.survey_responses
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY votes_insert_auth ON public.votes
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

-- Optional: if app needs updates/deletes, keep strict owner-based checks.
-- Uncomment and adjust column names if needed (example uses user_id):
-- CREATE POLICY votes_update_owner ON public.votes
--   FOR UPDATE TO authenticated
--   USING (user_id = auth.uid())
--   WITH CHECK (user_id = auth.uid());
-- CREATE POLICY votes_delete_owner ON public.votes
--   FOR DELETE TO authenticated
--   USING (user_id = auth.uid());


-- ============================================================
-- 2b) Optional variant for public classroom voting without login
-- ============================================================
-- Use this ONLY if anonymous users must insert votes/reactions/responses.
-- This avoids "always true" while still allowing anon role.
-- Comment out authenticated-only INSERT policies above before enabling this variant.

-- CREATE POLICY votes_insert_anon_or_auth ON public.votes
--   FOR INSERT TO anon, authenticated
--   WITH CHECK (coalesce(length(trim(session_id::text)), 0) > 0);
--
-- CREATE POLICY reactions_insert_anon_or_auth ON public.reactions
--   FOR INSERT TO anon, authenticated
--   WITH CHECK (coalesce(length(trim(session_id::text)), 0) > 0);
--
-- CREATE POLICY survey_insert_anon_or_auth ON public.survey_responses
--   FOR INSERT TO anon, authenticated
--   WITH CHECK (coalesce(length(trim(session_id::text)), 0) > 0);


-- ============================================================
-- 3) Leaked Password Protection Disabled
-- ============================================================
-- This is a dashboard setting, not SQL.
-- In Supabase Dashboard:
-- Authentication -> Providers (or Security) -> Password security
-- Enable "Leaked password protection".


-- ============================================================
-- 4) Post-fix validation queries
-- ============================================================

-- Verify no policy uses always-true expressions
select schemaname, tablename, policyname, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('options', 'questions', 'reactions', 'survey_responses', 'votes')
  and (
    coalesce(qual, '') ilike '%true%'
    or coalesce(with_check, '') ilike '%true%'
  );

-- Verify function search_path fixed
select n.nspname as schema_name,
       p.proname as function_name,
       pg_get_function_identity_arguments(p.oid) as args,
       array_to_string(coalesce(p.proconfig, '{}'), ', ') as function_config
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in ('handle_new_user', 'increment_vote', 'increment_question_vote', 'add_points')
order by p.proname;
