# PIRLS / IEA World-Class Improvement Roadmap

## Implemented Foundation
- Session-health status and retry sync flow for students
- Audit logs for teacher and student critical actions
- Item-level analytics (difficulty, discrimination, non-response, avg time)
- PDF and CSV exports from teacher dashboard
- Reliability retries for critical Firebase writes
- Bundle chunk split in Vite config

## 7 Advanced Tracks

### 1) Pedagogical Excellence
- Introduce explicit 0-3 rubric scoring for every open item
- Add exemplar responses per level in MK and SQ
- Add teacher intervention suggestions in report exports

### 2) Psychometrics and Validity
- Monitor item difficulty distribution by story
- Monitor discrimination by top/bottom groups
- Track non-response and response-time outliers
- Flag weak items for revision cycle

### 3) Reporting for Instruction
- Per-student profile: strengths, gaps, intervention plan
- Per-class profile: item map and domain-level trends
- Exportable evidence package for evaluators

### 4) Reliability Under Load
- Simulate concurrent classroom traffic
- Validate offline/online recovery on all student actions
- Add idempotency checks for duplicate writes

### 5) Security and Governance
- Finalize least-privilege DB rules per role
- Define audit retention and review cadence
- Create incident response playbook

### 6) Accessibility and Inclusion
- WCAG 2.1 AA pass across major flows
- Keyboard-only completion path
- High-contrast mode and readability options

### 7) Performance and Deployment Quality
- Continue code-splitting of heavy modules
- Lazy-load non-critical assets and activities
- Set performance budgets and monitor regressions

## Review-Ready Evidence Pack
- QA matrix results
- Rubric framework and calibration notes
- Sample audit trails
- PDF/CSV sample reports
- Performance and accessibility test snapshots

## Success Criteria
- No student-blocking defect in question flow
- No answer-loss defect under intermittent connectivity
- Full MK/SQ parity on tested stories
- Teacher report generation under 3 seconds for class <= 35 students
