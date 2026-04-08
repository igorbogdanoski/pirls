# QA Test Matrix - PIRLS / IEA Readiness

## Objective
Validate reliability, pedagogy, multilingual consistency, security, and reporting quality before external review.

## Core Environments
- Desktop: Chrome, Edge, Firefox (latest)
- Mobile: Android Chrome, iOS Safari
- Network: stable, 3G throttled, intermittent offline
- Modes: student, teacher, with and without active session

## Test Matrix

| ID | Area | Scenario | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| Q-01 | Session | Student joins valid class | Enter name + valid 6-char code | Join succeeds, session shown active | Critical |
| Q-02 | Session | Student joins invalid class | Enter non-existing code | Blocked with clear message | Critical |
| Q-03 | Session | Teacher creates class | Login -> Create session | Session created in DB, code visible | Critical |
| Q-04 | Session | Assigned story auto-open | Teacher assigns story, student refreshes | Student opens assigned story automatically | Critical |
| Q-05 | Sync | Temporary network loss | Disable network mid-question | Warning shown, retry available | Critical |
| Q-06 | Sync | Retry sync after restore | Re-enable network, click retry | Sync recovers, status active | Critical |
| Q-07 | Questions | Complete story without blocking | Answer all items including weak text answer | Student can always finish story | Critical |
| Q-08 | Questions | Last-question completion | Submit final answer | Completion screen appears | Critical |
| Q-09 | Questions | MCQ correctness feedback | Choose correct and incorrect options | Correct feedback and progress update | High |
| Q-10 | Questions | Open response min words | Enter <3 words then >=3 words | Submit blocked then enabled | High |
| Q-11 | Bilingual | MK/SQ parity | Compare same story in both languages | Same question count and flow | Critical |
| Q-12 | Teacher | Live student tracking | Student answers while teacher panel open | Real-time progress appears | High |
| Q-13 | Teacher | Item analytics rendering | Multiple students answer mixed items | Difficulty/discrimination shown | High |
| Q-14 | Reports | CSV export | Export from dashboard | Valid rows and escaped text | High |
| Q-15 | Reports | PDF export | Export from dashboard | PDF includes class + item metrics | High |
| Q-16 | Audit | Student event logging | Join + answer questions | Audit entries written | High |
| Q-17 | Audit | Teacher event logging | Assign/clear story + export | Audit entries written | High |
| Q-18 | Accessibility | Keyboard-only question flow | Navigate and answer without mouse | Full completion possible | High |
| Q-19 | Performance | Initial load under slow network | Open app in throttled mode | Home interactive < 5s target | Medium |
| Q-20 | Performance | Bundle integrity | Build production | No build errors, acceptable chunking | Medium |

## Acceptance Gates
- Critical tests: 100% pass
- High tests: >= 95% pass
- Medium tests: >= 90% pass
- No data-loss bug allowed in student answer flow
- No blocker in finish-story flow

## Defect Severity Scale
- S1: Data loss, session corruption, student blocked from completion
- S2: Incorrect score/report output, broken teacher live view
- S3: UX/localization inconsistency without data impact
- S4: Cosmetic issue

## Pre-Release Checklist
- Run full matrix in MK and SQ
- Verify report exports on Windows and macOS
- Verify session and answer retention after page refresh
- Review audit trail sampling for 10 random sessions
- Re-run production build and smoke test deployed version
