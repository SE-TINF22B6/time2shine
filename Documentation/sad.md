# Project Name
## Software Architecture Documentation
> This template is a simplified version based on the documentation templates from IBM Rational Unified Process (RUP) and arc42.org (https://docs.arc42.org/home/)
> If necessary, you can add more topics related to the architecture design of your application.

### 1. Introduction
#### 1.1 Overview
- Scalability: Easily handle increasing traffic and growth.
- Flexibility: Support various client types and platforms.
- Decoupling: Separate client and server for easier maintenance.
- Statelessness: Simplify server logic and improve reliability.
- Security: Ensure data confidentiality and integrity with standard mechanisms like HTTPS and OAuth.
#### 1.2 Constraints
- Gradual Development: Adopts a systematic, step-by-step method to fulfill all specifications, avoiding aimless progress.
- Distinct Client-Server Boundary: Ensures a clear demarcation between client and server functionalities, facilitating interchangeability and the development of cross-platform user interfaces.
- Stateless Communication: Mandates that every client request to the API includes all essential data for processing, enhancing scalability by eliminating server-side session management.
- Caching Support: Requires servers to explicitly indicate whether responses can be cached, thereby enhancing performance through efficient data retrieval.
- Consistent Interface: Demands that all resources accessible through the REST API adhere to a standardized Uniform Resource Identifier (URI) format and utilize common HTTP methods.
- Layered Design: Facilitates scalability by allowing the incorporation of multiple intermediary layers between client and server components.
- Optional Code-On-Demand: Offers the capability to download and execute small scripts or applets directly from the interface, augmenting client functionality without necessitating extensive updates.
#### 1.3 Definitions, Acronyms and Abbreviations
- API: Application Programming Interface
- URI: Uniform Resource Identifier
- HTTP: Hypertext Transfer Protocol
- REST: Representational State Transfer
- OAuth: Open Authorization
- PixiJS: Pixi JavaScript
#### 1.4 References
- [Handout](handout2shine_2nd_presentation.pdf)
- [Ci-CD](CI-CD.md)
- [Software Metrics](software_metrics.md)

### 2. Architecture tactics
Most of our architecture tactics go hand in hand with our selling points for our website.

- Security: We want to ensure that our users feel safe using our website and we want to avoid handling any sensitive information like passwords by using OAuth.
- Encapsulation: We want to have encapsulated systems for the frontend, backend and our game engine to have a structured project and so that each system has its defined tasks.
- Scalability: We want to design our architecture in a way that we can easily add new features and most importantly new games with ease. This goes hand in hand with the aspect of encapsulation we mentioned above, since we need a good strucuture for it.

### 3. Architecture design
#### 3.1 Overview 

Our website it split into a react frontend which is connected with GitHub for user authentication, a game engine using PixiJS and a Spring backend which communicates with our PostgreSQL database. These blocks each have their capsulated purpose and ensure that our website and the project itself stays structured.

Component diagram:

![t2s component diagram](https://github.com/SE-TINF22B6/time2shine/assets/59262249/b54967e7-6ce5-41a3-bb93-26987185035c)

#### 3.2 Runtime view (Tips: https://docs.arc42.org/section-6/)
- A user opens our website and sends his user information in order to log in
- A user then can play games on our game pages
- After he is done, the user can submit their score to the backend
- Our backend confirms the game result and shows it on the highscore leaderboard
- The user then gets redirected to our homepage where they can choose their next action

Sequence diagram:

![image](https://github.com/SE-TINF22B6/time2shine/assets/59262249/dc10b9c6-fe63-4551-bfe4-810700310b79)

#### 3.3 Deployment view (Tips: https://docs.arc42.org/section-7/)
Our website runs on all web browsers. While one can access our website on a mobile phone, it is not optimized for it due to the fact that the games we developed are PC games and therefore not suited for a phone.

A user only needs to create an GitHub account and log into our website via OAuth in order to fully use our website.
