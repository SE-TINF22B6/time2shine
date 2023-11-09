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
> Until now, there are now external documents used in our SRS


### 2. Functional requirements
>  This section will explain the different Use Cases we want to implement. It describes the individual pre- and post-conditions and gives a brief idea of what we want to accomplish.

#### 2.1 Overview 
> A brief description of the functionality of your application.  
> Include one or more **UML use case** diagram(s) and necessary description to specify the major use cases of your application.

Link to our [UML diagram](https://github.com/SE-TINF22B6/time2shine/blob/main/uml.drawio) (draw.io format, not human-readable)
![image](https://github.com/SE-TINF22B6/time2shine/assets/122756244/1d99b73e-5c79-4d2f-9660-1e3836c778d2)

Link to our [UI-Template](https://github.com/SE-TINF22B6/time2shine/blob/main/UITemplate.svg) (draw.io format, not human-readable)
![image](https://github.com/SE-TINF22B6/time2shine/assets/59262249/462c3693-4166-48cc-b30a-ccff34b60c93)

#### 2.2 Account Management
### Highscore Activity Diagram
![image](https://github.com/SE-TINF22B6/time2shine/blob/main/Documentation/Highscore_ActivityDiagram.svg)

### Logout Activity Diagram
![image](https://github.com/SE-TINF22B6/time2shine/blob/main/Documentation/Logout_ActivityDiagram.png)

### Account Management Activity Diagram
![image](https://github.com/SE-TINF22B6/time2shine/blob/main/Documentation/Accounts.png)
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
> This section shows the nonfunctional requirements which we want to provide. This includes functionalities to let the user feel as comfortable as possible while having all of his data secured.


#### 3.1 Maintainability and Flexibility
> Since we plan on separating our project into dedicated frontend and backend, we dont't end up with a giant, unmaintainable monolithic construct, but rather a Services-based architecture. This means that the two parts are independant from each other and can e. g. be replaced if a used framework etc. is discontinued. Also, this approach makes us flexible in terms of scaling. In theory,we should be able to easily power on multiple instances of our backend for example.

#### 3.2 Security
> We plan on using OAuth2 to secure our application, meaning that we use a current up-to-date technology that is used by most serious companies from all over the world. It makes communication between the different parts of our application secure.

> [!NOTE]
> These are only some of the nonfunctional requeirements, but there is more yet to come.
> 

### 4. Technical constraints
- **Backend:** A RESTful API build with Spring Boot in Kotlin
- **Database:** PostgreSQL Database
- **Frontend:** Based on the Pixi.JS OpenGL Renderer that we will use to build our games
- **Deployment:** As students, we can each get a 200 $ credit at Digital Ocean, a web hosting provider. We will spend them on running a Debian 12 instance there. We chose Digital Ocean over bwCloud due to the way better performance (we can choose from different server configurations there). We chose a VPS with 2 AMD EPYC cores and 4 GB of memory which will be sufficient for our use, but still a lot more performant than the offered bwCloud instance. On this server, we will run our Backend, the database and our frontend, each of them being a dedicated Docker Container.
