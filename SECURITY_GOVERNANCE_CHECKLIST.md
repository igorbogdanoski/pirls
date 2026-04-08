# Security and Governance Checklist (PIRLS/IEA Review)

## Access Control
- Enforce role-based access for teacher vs student operations
- Deny write access outside session scope
- Validate session existence before join and write operations
- Block privileged keys from client builds

## Data Protection
- Store minimum personal data (name, generated student id, responses)
- Encrypt data in transit (HTTPS only)
- Define retention and deletion policy for session logs and answers

## Auditability
- Log session create/join/assign/export events
- Log answer save events with timestamp and actor metadata
- Review random sample of audit trails weekly

## Integrity and Reliability
- Retry critical writes with bounded exponential backoff
- Detect missing sessions and expose user-safe recovery path
- Preserve answer write ordering with timestamp + question index

## Incident Readiness
- Define owner for security incident triage
- Document rollback and communication procedure
- Run quarterly tabletop incident simulation

## Reviewer Evidence
- Provide database rules snapshot
- Provide anonymized audit samples
- Provide defect history for critical security issues
