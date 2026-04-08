# QA Execution Report - 2026-04-09

## Scope
Execution of core production checks on https://pirls.mismath.net using browser automation.

## Tooling
- Script: qa_live_check.cjs
- Output artifact: qa-live-report.json
- Screenshot artifact: qa-live-home.png

## Results Summary
- Passed: 3
- Failed: 2
- Total executed: 5

## Detailed Results

| ID | Scenario | Result | Evidence |
|---|---|---|---|
| Q-01 | Home page title loads | PASS | Title detected: "Читање со разбирање" |
| Q-02 | Story cards visible | PASS | Found 19/19 expected stories |
| Q-03 | MK/SQ language toggles | PASS | MK=1, SQ=1 |
| Q-04 | Invalid student code handling | FAIL | No explicit validation state detected after invalid code submit |
| Q-05 | Teacher PIN modal visibility | FAIL | PIN input/prompt not detected with current selector paths |

## Interpretation
- Core content availability and bilingual entry points are healthy.
- Two authentication-flow checks need follow-up because production UI behavior does not expose deterministic selectors/messages for the automation script in current state.

## Actions Required
1. Add stable data-testid attributes for student join and teacher PIN components.
2. Ensure invalid-code error text is always rendered in DOM (not only transient toast).
3. Re-run the same script after selector hardening.

## Gate Decision
- QA Gate: Conditional Pass
- Condition: Close Q-04 and Q-05 with deterministic UI signals and rerun automated checks.

## Delta Update (Post QA-hardening)
- Local verification on updated build (`http://127.0.0.1:4173`) completed with:
	- Q-01 PASS
	- Q-02 PASS
	- Q-03 PASS
	- Q-04 PASS (invalid code shows deterministic validation message)
	- Q-05 PASS (teacher PIN input detected)
- Note: production endpoint must be redeployed with latest commit to reflect these PASS results in live automation.
