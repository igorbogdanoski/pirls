# Security Review - 2026-04-09

## Scope
Application-level and dependency-level review based on repository inspection and npm audit outputs.

## Findings

### 1) Dependency Risk Posture
- Production dependencies: 0 known vulnerabilities.
- Full dependency tree (including dev): 8 vulnerabilities (6 high, 2 moderate).
- Main affected areas: Vite ecosystem and PWA/workbox transitive chain.

### 2) Secrets and Configuration Hygiene
- Local runtime secrets exist in .env.local (workspace only).
- .env.local is excluded in .gitignore, which is correct.
- Firebase client config is loaded via VITE_ variables (expected for client app).

### 3) Access-Control Evidence Gap
- No Firebase Realtime Database rules file found in repository.
- This prevents repository-level verification of role restrictions and write scopes.

## Severity Assessment
- Immediate production exposure via dependencies: Low (0 prod vulns reported).
- Governance/compliance risk for audit: Medium (rules not versioned in repo).
- Supply-chain maintenance risk: Medium-High (dev-chain high advisories).

## Required Remediations
1. Export and version Firebase rules into repository for review traceability.
2. Add CI step: npm audit --omit=dev and fail on any prod vulnerability.
3. Add scheduled dependency maintenance (monthly) for Vite/PWA toolchain.
4. Add release checklist item confirming no .env.local or generated secrets in commits.

## PIRLS/IEA Reviewer Evidence
- Provide this review file.
- Provide latest npm audit --omit=dev output (clean).
- Provide Firebase rules snapshot and last modified date.
- Provide sample audit log records from live sessions.

## Current Security Status
- Operationally acceptable for pilot usage.
- Not yet fully audit-ready until database rules are checked in and reviewed.
