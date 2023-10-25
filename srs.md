# srs2shine
## Software Requirements Specification
> This template is a simplified version based on the documentation templates from IBM Rational Unified Process (RUP).
### 1. Introduction
#### 1.1 Overview
> A game hub where players can play and enjoy multiple different online games of different styles directly in their browsers, whitout having to install any software.
#### 1.2 Scope
> This document covers our whole project, in the future however we might split it up into two sections (probably frontend and backend).
#### 1.3 Definitions, Acronyms and Abbreviations
- **API:** Application Programming Interface
- **Java:** The programming language we use in our backend
- **Pixi.JS:** OpenGL Renderer we use for building the games in our frontend
- **REST:** Representational State Transfer (a paradigm for API architecture)
- **Spring Boot:** Our backend framework (RESTful API)
- **tbd:** To be done
- **t2s:** Abbrevation for "time2shine"

#### 1.4 References
> A complete list of all documents referenced. Each document should be identified by title, date, and publishing organization. You can also insert hyperlinks, in order to open the references conviniently.

### 2. Functional requirements
>  This section contains all the software requirements to a level of detail sufficient to enable designers to design a system to satisfy those requirements and testers to test that the system satisfies those requirements.  
>  This section is typically organized by feature, but alternative organization methods may also be appropriate, for example, organization by user or organization by subsystem.

> [!NOTE]
> You can insert links to your UML diagrams and user stories, or labels of user stories into this document.

#### 2.1 Overview 
> A brief description of the functionality of your application.  
> Include one or more **UML use case** diagram(s) and necessary description to specify the major use cases of your application.

Link to our [UML diagram](https://github.com/SE-TINF22B6/time2shine/blob/main/uml.drawio) (draw.io format, not human-readable)
![image](https://github.com/SE-TINF22B6/time2shine/assets/122756244/1d99b73e-5c79-4d2f-9660-1e3836c778d2)

Link to our [UI-Template](https://github.com/SE-TINF22B6/time2shine/blob/main/UITemplate.svg) (draw.io format, not human-readable)
![image](https://github.com/SE-TINF22B6/time2shine/assets/59262249/462c3693-4166-48cc-b30a-ccff34b60c93)


#### 2.2 Account Management
> - Relevant **user stories**: [Issue #20](https://github.com/SE-TINF22B6/time2shine/issues/20)
> - **UI mockup:** Should look like the account view in the picture (see [our UI Mockup](https://github.com/SE-TINF22B6/time2shine/blob/main/UITemplate.svg))
> - **UML behavior diagram:** see further up the page or [here](https://github.com/SE-TINF22B6/time2shine/blob/main/uml.drawio)
> - **Preconditions:** We need a functioning backend that is able to hold user accounts.
> - **Postconditions:** Users can now login. When they are logged in, some kind of token is stored in the user's browser session. This means he can now access his account page and play games...
> - **Estimated effort:** high

#### 2.2 Playing Games
> - Relevant **user stories**: [Issue #18](https://github.com/SE-TINF22B6/time2shine/issues/18) and [Issue #19](https://github.com/SE-TINF22B6/time2shine/issues/19)
> - **UI mockup:** Should look like the account view in the picture (see [our UI Mockup](https://github.com/SE-TINF22B6/time2shine/blob/main/UITemplate.svg))
> - **UML behavior diagram:** see further up the page or [here](https://github.com/SE-TINF22B6/time2shine/blob/main/uml.drawio)
> - **Preconditions:** The account system has to be implemented and working.
> - **Postconditions:** Users can now login and play games.
> - **Estimated effort:** high

#### 2.3 Highscore Tracking
> - Relevant **user stories**: [Issue #17](https://github.com/SE-TINF22B6/time2shine/issues/17)
> - **UI mockup:** Should look like the account view in the picture (see [our UI Mockup](https://github.com/SE-TINF22B6/time2shine/blob/main/UITemplate.svg))
> - **UML behavior diagram:** see further up the page or [here](https://github.com/SE-TINF22B6/time2shine/blob/main/uml.drawio)
> - **Preconditions:** The user account system needs to be setup. Also, players have to be able to play games, and the results have to be stored.
> - **Postconditions:** Based on the stored game results, the leaderboards are now being calculated and published on the website.
> - **Estimated effort:** low

#### 2.3 Game Tutorials
> - Relevant **user stories**: [Issue #21](https://github.com/SE-TINF22B6/time2shine/issues/21)
> - **UI mockup:** There is no UI mockup yet, because this feature can't be implemented before we have everything else running.
> - **UML behavior diagram:** see further up the page or [here](https://github.com/SE-TINF22B6/time2shine/blob/main/uml.drawio)
> - **Preconditions:** The whole game portal has to be running already.
> - **Postconditions:** When a new user creates an account, he is prompted if he wants to get an introduction to our portal.
> - **Estimated effort:** ?medium?


### 3. Nonfunctional requirements

> [!IMPORTANT]  
> It is not necessary to cover all of the following categories, but focus on what your project will implement.  
> If some nonfunctional requirements are described as user stories in your backlog, add their **links** in this section, or any information to guide the reader find them in your backlog, such as a **label** of those relevant user stories.

> Categories: Usability, Reliability, Performance, Efficiency, Integrity, Maintainability, Flexibility, Testability, Reusability, Security.  


### 4. Technical constraints
> Specify any major constraints, assumptions or dependencies, e.g., any restrictions about which type of server to use, which type of open source license must be complied, etc. 
