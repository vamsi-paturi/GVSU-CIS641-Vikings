# Software Requirement Specifications
## 1. Overview:
The software requirement specification document outlines the requirements of team Viking project, Employee Management System web application. This document explains about the app features, interfaces and designs.
## 2. Requirements

### 2.1 Functional Requirements
1.	Manage User Login:
       1. Upon completion of page loading, the welcome screen shall display sign-inscreen and sign-up button for sign-up.
       2. Sign-up screen shall be displayed when the user presses the sign-up button.
       3. For sign-in user have to up the user detail (email and password).
2.	Mange Sign Up:
       1. After clicking on sign up option, users details shall be captured like - name, email and home address.
       2. Sign-up form inputs shall be validated when the user presses submit button.
3.	Upload documents:
       1. When users successfully login into the system there will be an option to upload your documents.
       2. When users clicks on upload the document button a new page will be open.
       3. In new page the will be document upload control and a field named as document tittle.
	4. When user selects files and enters title then users will be ab le to upload the doc in the system.
	5. After validation document will be uploaded and success message will appear.
4.	Attendance Management:
	1. When users successfully login into the system his/her attendance will automatically marked and entry time will be recorded into the system
	2. There will be a button to take break and when user clicks on this button the break start time will record. 
	3. There will be a button to resume work and when user clicks on this button the break end time will record.
	4. When user clicks on logout button the shift will be ended.
5.	Operational Requirements:
	1. After successful login, dashboard will appear
	2. There should be an option to upload the documents.
	3. There should be an option to take break/ resume work
	4. There should be an option to check his current week hours and salary.



### 2.2 Non-Functional Requirements

1.	Quality:
	1. All users shall have valid email address.
	2. All users should have document in pdf format
	3. The size of all documents should be small.
	4. User cannot edit the time of his/her shift.

2.	Operational Requirement:
	1. All images for the application shall be stored in AWS S3 buckets.
	2. The system shall store its entire user and post data in Sql Database.
	3. The system shall be capable of handling multiple users at a time.

3.      Security
        1. The system shall provide security for employees’ personal data
        2. The system shall maintain confidentiality of employees’ salary details. 

