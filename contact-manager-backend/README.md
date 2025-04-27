# Contact Manager Backend - Security Testing and Hardening

## Project Overview

This project focuses on performing a comprehensive security assessment of the Contact Manager Backend, developed with FastAPI. The objective was to simulate a real-world enterprise-grade security testing engagement, using top-tier tools and methodologies, and to build a process that reflects what would happen in a real corporate pentest or secure SDLC cycle.

## Goals

- Perform deep vulnerability assessments with tools like Snyk, OWASP ZAP, SonarQube, and Semgrep.
- Identify critical, high, and medium-risk vulnerabilities.
- Analyze the backend APIs and endpoints for logical and technical flaws.
- Simulate potential attack scenarios that a malicious actor could leverage.
- Provide clear remediation strategies and strengthen the security posture.
- Create a blueprint that could fit into a corporate-level SDLC or DevSecOps pipeline.

## Tools and Technologies Used

- OWASP ZAP - Dynamic Application Security Testing (DAST)
- Snyk CLI - Dependency vulnerability scanning
- SonarQube - Static code analysis
- Semgrep - Advanced code pattern security analysis
- GitHub - Version control
- Python (FastAPI) - Backend framework

## Key Vulnerability Findings

### 1. Snyk Findings
- Timing Attack vulnerability in `ecdsa@0.19.1` (High Severity)
- Missing Encryption of Sensitive Data in `ecdsa@0.19.1`
- No available upgrade or patch as of the time of testing.

### 2. OWASP ZAP Findings
- Medium Severity: Insecure script references found under `/docs`.
- Low Severity: OpenAPI exposed documentation.
- Missing Security Headers: No CSP (Content-Security-Policy), HSTS (Strict-Transport-Security).
- 404 responses leaking server information.

### 3. SonarQube Findings
- Critical: Lack of input validation on some query parameters.
- Major: Hardcoded secrets detected in legacy sample config (commented but still present).
- Minor: Insufficient logging on failed authentication attempts.

### 4. Semgrep Findings
- Possible Injection Points: Although FastAPI provides automatic escaping, some manual database queries lacked parameterization.
- Broken Authentication Patterns: JWT tokens being processed without expiration check validation in some edge cases.


## Challenges Faced

- Incomplete Requirements: No initial proper documentation meant we had to explore APIs manually.
- Dependency Management Hell: Snyk showed hundreds of packages missing initially; had to manually fix and create a working `requirements.txt`.
- ZAP Autoscans Running Wild: Initial ZAP scans bombarded the backend causing temporary crashes; tuning thresholds was necessary.
- False Positives in SonarQube: Took extra time to triage real issues versus cosmetic or informational ones.


## Remediations Proposed

- Implement strict Content Security Policies and add missing security headers.
- Sanitize all API parameters explicitly and validate user input rigorously.
- Rotate and remove any hardcoded secrets.
- Add expiration validation on JWT tokens.
- Secure and restrict API documentation access in production.
- Patch vulnerable libraries as soon as fixes are released.


## Outcome and Difference Made

- **Reduced Attack Surface**: Tightened security controls around API endpoints.
- **Raised Code Quality**: Introduced stricter code scanning into CI/CD to catch issues earlier.
- **Enhanced Resilience**: Backend is now more resistant to common attack vectors.
- **Matured DevSecOps Integration**: Built a model that can scale into corporate secure SDLC frameworks.


## How to Run This Locally

```bash
# Clone the repo
$ git clone https://github.com/rakeshb114/Contact-Manager.git
$ cd contact-manager-backend

# Set up virtual environment
$ python3 -m venv clean-venv
$ source clean-venv/bin/activate

# Install requirements
$ pip install -r requirements.txt

# Run the backend
$ uvicorn main:app --reload
```

## License

This project is open for educational and ethical pentesting purposes only.

---

> Security isn't a feature, it's a responsibility. 🚀

