# Overview:

The software requirement specification document outlines the requirements of Vikings project, Employee Management System. This document explains about the system's features, interfaces and design logic in details. 

# Software Requirements
This section of the document focuses on how the system shall response and what all services are available to the EMS users. 
Functional requirements section covers details of user requirements.
Non-functional requirement section provides a user expectation and applies to whole system

## Functional Requirements

### Manage User Login:

| ID | Requirement |
| :-------------: | :----------: |
| FR1 | Upon completion of page loading, the welcome screen shall display sign-inscreen and sign-up button for sign-up.|
| FR2 |  Sign-up screen shall be displayed when the user presses the sign-up button. |
| FR3 | For sign-in user have to up the user detail (email and password)  |
| FR4 | |

### Sign Up/User Registration:

| ID | Requirement|
| :-------------: | :----------: |
| FR5 | Sign-up screen shall be displayed when the user presses the sign-up button |
| FR6 | After clicking on sign up option, page should display the options of name, email , phone number, home address, password to fill |
| FR7 | users details shall be captured  |
| FR8 | Sign-up form inputs shall be validated when the user presses submit button |


### Upload documents:

| ID | Requirement|
| :-------------: | :----------: |
| FR9 | When users successfully login into the system there will be an option to upload your documents. |
| FR10 |  When users clicks on upload the document button a new page will be open. |
| FR11 | In new page the will be document upload control and a field named as document tittle. |
| FR12 | When user selects files and enters title then users will be ab le to upload the doc in the system. |
| FR13| After validation document will be uploaded and success message will appear. |

### Attendance Management:

| ID | Requirement|
| :-------------: | :----------: |
| FR14 | When users successfully login into the system his/her attendance shall automatically marked and entry time shall be recorded into the system |
| FR15 | There shall be a button to take break and when user clicks on this button the break start time shall record. |
| FR16 | There shall be a button to resume work and when user clicks on this button the break end time shall record.|
| FR17 | When user clicks on logout button the shift shall be ended|
| FR18 | Number of hours worked shall be recorded after shift is ended|

### Operational Requirements:

| ID | Requirement|
| :-------------: | :----------: |
| FR19 | After successful login, dashboard shall appear |
| FR20 | There shall be an option to upload the documents. |
| FR21 | There shall be an option to take break/ resume work |
| FR22 | There shall be an option to check her current week hours and salary |
| FR23 | Admin shall be able to view all the employees name |
| FR24 | Admin shall be able edit employees details |
| FR25 | Admin shall be able to view employees details like work hours, break taken |

## Non-Functional Requirements

### Quality:

| ID | Requirement|
| :-------------: | :----------: |
| NFR1 | All users shall have valid email address. |
| NFR2 | All users should have document in pdf format |
| NFR3 | The size of all documents should be small. |
| NFR4 | User shallnot be able to edit the time of his/her shift. |
| NFR5 | <Non-Functional Requirement 1> |
| NFR6 | <Non-Functional Requirement 2> |

### Availability:

| ID | Requirement|
| :-------------: | :----------: |
| NFR7 | Application shall be up and running unitruptly until it is closed. |
| NFR8 | User shall be able to access the login page within 5 second of application started |
| NFR9 | All the documents saved by the user shall be stored in the backend of S# bucket |
| NFR10 | After successful login, users email address, password, name , phone shall be stored in AsyncStorage. |


### Operational Requirement:

| ID | Requirement|
| :-------------: | :----------: |
| NFR11 | Application shall be installed or run on both operating systems -Windows, Linux |
| NFR12 | The system front end UI shall be created using Angular JS |
| NFR13 | System shall be build using Angular CLI |
| NFR14 | Application Shall store user's data in MongoDb |
| NFR15 | Application Shall store user's pdf documents in amazon S3 bucket|

###  Security:

| ID | Requirement|
| :-------------: | :----------: |
| NFR16 | User's personal data shall be stored in database in encrypted format. |
| NFR17 | Unsuccessful login of user shall be recorded and audited. |
| NFR18 | User data shall not be shared with any other party. |
| NFR19 | The source coding shall follow secure coding practices. |
| NFR20 | User's password shall be stored in encrypted format |
| NFR21 | System shall not crashed after continuously running for more than 24 hours |


### Performance:

| ID | Requirement|
| :-------------: | :----------: |
| NFR22 |The system shall be capable of handling multiple users at a time. |
| NFR23 | System shall upload the documents within 2 seconds |
| NFR24 | System shall provide high performance to it's users|
| NFR25 | System shall be provide all the functionalities without app getting freezed |
| NFR26 | Backend server shall be running until system is closed. |

# Change management plan

<Description of what this section is>

# Traceability links

<Description of this section>

## Use Case Diagram Traceability

| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Move Player | FR5 |
| … | … | … |


## Class Diagram Traceability

| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classPlayer| NFR3, FR5 |
| … | … | … |


## Activity Diagram Traceability

<In this case, it makes more sense (I think, feel free to disagree) to link to the file and to those requirements impacted>

| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| <filename>| Handle Player Input | FR1-5, NFR2 |
| … | … | … |


# Software Artifacts

<Describe the purpose of this section>

*[I am a link](to_some_file.pdf)

