# Contact Manager Project

## Overview

The Contact Manager is a secure backend service built using FastAPI for managing and storing contacts. This project focused heavily on building a robust backend API while embedding real-world security testing practices to simulate a corporate-grade development and auditing cycle.

## Project Goals

- Develop a fully functional, scalable backend API for contact management
- Implement authentication and authorization with industry standards
- Integrate security tools to perform dependency, static, and dynamic analysis
- Identify and remediate vulnerabilities early in the lifecycle
- Showcase secure coding, threat modeling, and penetration testing integration

## Technical Stack

- Backend Framework: FastAPI (Python)
- Database: SQLite (for development and local testing)
- Authentication: OAuth2 with JWT tokens
- Security Testing Tools:
  - OWASP ZAP
  - SonarQube (Static Code Analysis)
  - Semgrep (SAST)
  - Snyk (Dependency Scanning)

## Major Activities and Storyline

### 1. Initial Setup and Development
- Designed API endpoints for managing contacts
- Implemented OAuth2 based authentication with token generation
- Documented APIs using auto-generated Swagger UI via FastAPI

### 2. Dependency Scanning (Snyk)
- Identified critical vulnerabilities:
  - Timing Attack vulnerability in ecdsa library
  - Missing encryption of sensitive data in ecdsa library
- No patches available at the moment, documented for monitoring

### 3. Dynamic Application Testing (OWASP ZAP)
- Conducted active scans and passive crawls
- Observed:
  - Medium severity issues related to scripts in comments on Swagger UI
  - Minor OpenAPI spec inconsistencies
- Planned remediation to sanitize output and improve API error handling

### 4. Static Analysis (SonarQube and Semgrep)
- Detected:
  - Minor code smells and style issues
  - Input validation gaps
- Actions:
  - Strengthened parameter validation
  - Applied strict coding standards

### 5. Challenges Faced
- Integrating continuous security testing without disrupting agile development
- Managing third-party library vulnerabilities without available immediate patches
- Handling heavy dynamic scanning from ZAP without server performance degradation

### 6. Outcomes and Value Addition
- Built a backend service following secure coding practices
- Embedded security checks in multiple phases of the SDLC
- Gained practical exposure to real-world security testing tools and methodologies

## Key Vulnerabilities Discovered

| Vulnerability | Tool | Severity | Status |
|---------------|------|----------|--------|
| Timing Attack on ecdsa | Snyk | High | Pending Patch |
| Missing Encryption of Sensitive Data (ecdsa) | Snyk | High | Pending Patch |
| Scripts in Comments (Swagger UI) | OWASP ZAP | Medium | Planned Mitigation |
| OpenAPI JSON Inconsistencies | OWASP ZAP | Low | Planned Mitigation |
| Input Validation Weaknesses | SonarQube / Semgrep | Medium | Fixed |

## Planned Remediations

- Implement strict Content Security Policies (CSP)
- Enhance input validation against API schema definitions
- Add advanced error handling and response security headers
- Upgrade vulnerable dependencies as patches become available

## Project Structure

```
contact-manager/
│
├── backend/
│   ├── app/               # FastAPI app source code
│   ├── requirements.txt   # Python dependencies
│   └── README.md           # Backend-specific notes
│
├── README.md               # Main project README (this file)
└── ...
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to propose.

## License

This project is licensed under the MIT License.

## Contact

- Project Lead: Rakesh B
- GitHub: [rakeshb114](https://github.com/rakeshb114)


This project demonstrates secure software engineering, professional-grade backend development, and real-world vulnerability management lifecycle.

Thank you for checking out this project!
