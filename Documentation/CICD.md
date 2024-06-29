Here is the requested text formatted in Markdown:

---

### CI/CD-Setup

- **Development environment:** CI/CD tools focusing on developing clean and tested code.
- **Central repository environment:** CI/CD pipelines with automated processes to ensure absolute correctness on the main branch.

#### Detailed Configuration of Tools and Processes

##### Development Environment

**Git:**
- To avoid merge conflicts and create isolated environments, we divided our main branch into frontend and backend branches.
- Feature branches are temporary and deleted after merging to the next higher stage.

**Apache Maven:**
- Tool for automating building processes and easier project management.
- The `pom.xml` file is crucial, describing project configuration, dependencies, and build configurations.
  - **Important Dependencies:**
    - **Spring-Framework:** For easier communication and configuration between frontend, middleware, and backend.
    - **PostgreSQL:** For connecting to our database server.
    - **Spring-Dotenv:** Allows creation of `.env` files for environment variables like database server credentials.

**JUnit 5:**
- A framework for writing unit tests in Java.
- Maven creates a folder for writing unit tests.
- Tests methods and functions in the source folder classes.
- Parameterized tests are possible.
- Include the latest version of `junit.jupiter` in Maven dependencies.

**React Testing Library:**
- A tool for creating tests with JavaScript/React components.
- Focuses on end-to-end tests to simulate typical user behavior and scenarios on our webpage.

**SonarLint - SonarQube - SonarCloud:**
- **SonarLint:** A plugin/extension in IDEs for code analysis.
- **SonarQube/SonarCloud:** For team-wide analysis, linked to GitHub repositories.

##### Source Code Repository Environment

After pushing new code or features to the main branch (or selected branches like frontend/backend), several CI/CD processes run automatically through GitHub Actions.

**CodeQL:**
- GitHub tool for analyzing the repository for vulnerabilities, dependency, and code quality issues.
- Configuration file available here.
- Workflow activates after each push or pull request on the master and frontend branches.
- Initializes required CodeQL tools and performs the analysis.

**Maven:**
- Pipeline runs after each push and pull request on the master and frontend branches.
- Configuration file available here.
- Builds the project from scratch and runs all tests.

**React:**
- Pipeline runs after each push and pull request on the master and frontend branches.
- Configuration file available here.
- Focuses on building and testing the React application.

**DependaBot:**
- Periodically scans repository dependencies.
- Configuration file available here.
- Checks for updated or new versions of dependencies and sends pull requests for approval.

---



