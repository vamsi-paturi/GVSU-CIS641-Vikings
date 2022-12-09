# Overview:

The software requirement specification document outlines the requirements of Vikings project, Employee Management System. This document explains about the system's features, interfaces and design logic in details. 

# Software Requirements
This section of the document focuses on how the system shall response and what all services are available to the EMS users. 
Functional requirements section covers details of user requirements.
Non-functional requirement section provides a user expectation and applies to whole system

## Functional Requirements

###Manage User Login:

| ID | Requirement |
| :-------------: | :----------: |
| FR1 | Upon completion of page loading, the welcome screen shall display sign-inscreen and sign-up button for sign-up.|
| FR2 |  Sign-up screen shall be displayed when the user presses the sign-up button. |
| FR3 | For sign-in user have to up the user detail (email and password)  |
| FR4 | |

###Sign Up/User Registration:

| ID | Requirement|
| :-------------: | :----------: |
| FR5 | Sign-up screen shall be displayed when the user presses the sign-up button |
| FR6 | After clicking on sign up option, page should display the options of name, email , phone number, home address, password to fill |
| FR7 | users details shall be captured  |
| FR8 | Sign-up form inputs shall be validated when the user presses submit button |


###Upload documents:

| ID | Requirement|
| :-------------: | :----------: |
| FR9 | When users successfully login into the system there will be an option to upload your documents. |
| FR10 |  When users clicks on upload the document button a new page will be open. |
| FR11 | In new page the will be document upload control and a field named as document tittle. |
| FR12 | When user selects files and enters title then users will be ab le to upload the doc in the system. |
| FR13| After validation document will be uploaded and success message will appear. |

###Attendance Management:

| ID | Requirement|
| :-------------: | :----------: |
| FR14 | When users successfully login into the system his/her attendance shall automatically marked and entry time shall be recorded into the system |
| FR15 | There shall be a button to take break and when user clicks on this button the break start time shall record. |
| FR16 | There shall be a button to resume work and when user clicks on this button the break end time shall record.|
| FR17 | When user clicks on logout button the shift shall be ended|
| FR18 | Number of hours worked shall be recorded after shift is ended|

###Operational Requirements:

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

###<Name of Feature 1>

| ID | Requirement|
| :-------------: | :----------: |
| NFR1 | <Non-Functional Requirement 1> |
| NFR2 | <Non-Functional Requirement 2> |
| NFR3 | <Non-Functional Requirement 3> |
| … | … | … |

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

