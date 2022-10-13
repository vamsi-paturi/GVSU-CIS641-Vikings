# Software Requirement Specifications
## 1. Overview:
The software requirement specification document outlines the requirements of team Viking project, Employee Management System web application. This document explains about the app features, interfaces and designs.
## 2. Requirements

### 2.1 Functional Requirements
1.	Manage User Login:
       1. Upon completion of page loading, the welcome screen shall display sign-inscreen and sign-up button for sign-up.
       2. Sign-up screen shall be displayed when the user presses the sign-up button.
       3.	For sign-in user have to up the user detail (email and password).
2.	Mange Sign Up:
       1. After clicking on sign up option, users details shall be captured like - name, email and home address.
       2. Sign-up form inputs shall be validated when the user presses submit button.
3.	Upload documents:
i.	When users successfully login into the system there will be an option to upload your documents.
ii.	When users clicks on upload the document button a new page will be open.
iii.	In new page the will be document upload control and a field named as document tittle.
iv.	When user selects files and enters title then users will be ab le to upload the doc in the system.
v.	After validation document will be uploaded and success message will appear.
4.	Attendance Management:
i.	When users successfully login into the system his/her attendance will automatically marked and entry time will be recorded into the system
ii.	There will be a button to take break and when user clicks on this button the break start time will record. 
iii.	There will be a button to resume work and when user clicks on this button the break end time will record.
iv.	When user clicks on logout button the shift will be ended.
5.	Operational Requirements:
i.	After successful login, dashboard will appear
ii.	There should be an option to upload the documents.
iii.	There should be an option to take break/ resume work
iv.	There should be an option to check his current week hours and salary.



### 2.2 Non-Functional Requirements

1.	Quality:
i.	All users shall have valid email address.
ii.	All users should have document in pdf format
iii.	The size of all documents should be small.
iv.	User cannot edit the time of his/her shift.

2.	Operational Requirement:
i.	All images for the application shall be stored in AWS S3 buckets.
ii.	The system shall store its entire user and post data in Sql Database.

