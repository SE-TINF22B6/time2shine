# Project Name
## Software Architecture Documentation
> This template is a simplified version based on the documentation templates from IBM Rational Unified Process (RUP) and arc42.org (https://docs.arc42.org/home/)
> If necessary, you can add more topics related to the architecture design of your application.

### 1. Introduction
#### 1.1 Overview
> What are the selling points of your architecture design?
- Scalability: Easily handle increasing traffic and growth.
- Flexibility: Support various client types and platforms.
- Decoupling: Separate client and server for easier maintenance.
- Statelessness: Simplify server logic and improve reliability.
- Security: Ensure data confidentiality and integrity with standard mechanisms like HTTPS and OAuth.
#### 1.2 Constraints
> Any technical or organizational constraints, conventions (Tips: https://docs.arc42.org/section-2/)
- Gradual Development: Adopts a systematic, step-by-step method to fulfill all specifications, avoiding aimless progress.
- Distinct Client-Server Boundary: Ensures a clear demarcation between client and server functionalities, facilitating interchangeability and the development of cross-platform user interfaces.
- Stateless Communication: Mandates that every client request to the API includes all essential data for processing, enhancing scalability by eliminating server-side session management.
- Caching Support: Requires servers to explicitly indicate whether responses can be cached, thereby enhancing performance through efficient data retrieval.
- Consistent Interface: Demands that all resources accessible through the REST API adhere to a standardized Uniform Resource Identifier (URI) format and utilize common HTTP methods.
- Layered Design: Facilitates scalability by allowing the incorporation of multiple intermediary layers between client and server components.
- Optional Code-On-Demand: Offers the capability to download and execute small scripts or applets directly from the interface, augmenting client functionality without necessitating extensive updates.
#### 1.3 Definitions, Acronyms and Abbreviations
> Definitions of all terms, acronyms, and abbreviations required to properly interpret this document.
- API: Application Programming Interface
- URI: Uniform Resource Identifier
- HTTP: Hypertext Transfer Protocol
- REST: Representational State Transfer
#### 1.4 References
> A complete list of all documents referenced -- hyperlinks to those documents.

### 2. Architecture tactics
> Reference your architecturally significant requirements from Semester 3.
> Revise your architecture tactics from Semester 3.

### 3. Architecture design
Component diagram:
![t2s component diagram](https://github.com/SE-TINF22B6/time2shine/assets/59262249/b54967e7-6ce5-41a3-bb93-26987185035c)

Sequence diagram:
![image](https://github.com/SE-TINF22B6/time2shine/assets/59262249/dc10b9c6-fe63-4551-bfe4-810700310b79)


#### 3.1 Overview 
> A summary of the architecture design -- highlights.  

#### 3.2 Runtime view (Tips: https://docs.arc42.org/section-6/)

#### 3.3 Deployment view (Tips: https://docs.arc42.org/section-7/)

#### 3.4 ... ...
