# VIKINGS
For any organization, managing all the employees data and keeping a track of it manually is a time consuming process. In order to assist organization to locate specific employees' complete records within a business and to assist newly hired employees with the onboarding process, we are proposing to construct an Employee Management System,a web-based application. 

## Team Members and Roles

* [Vamsi Paturi](https://github.com/vamsi-paturi/CIS641-HW2-paturi) - Front End Developer
* [Venkata Madhav Thota](https://github.com/thotave/CIS641-HW2-THOTA) - Database Engineer/ Quality Analyst
* [Dilip kumar Vavilapalli](https://github.com/DilipVavilapalli/CIS641-HW2-vavilapalli) - GUI Designer
* [Vaishnavi Prakash Rasane](https://github.com/VaishnaviRasane/CIS641-HW2-Rasane) - Backend Developer / Document Designer

## Documents
* [Meetings](https://github.com/thotave/GVSU-CIS641-Vikings/tree/master/meetings)
* [Project Proposal](https://github.com/thotave/GVSU-CIS641-Vikings/blob/master/docs/proposal-template.md)
* [Project Artifacts](https://github.com/thotave/GVSU-CIS641-Vikings/tree/master/artifacts)
* [Software Requirement Specifications](https://github.com/thotave/GVSU-CIS641-Vikings/blob/master/docs/software_requirements_specification.md)

## Run Instructions

** The Follwing are the steps in order to run the EMS program succesfully in VS code.
* For this, backend need to started first and then the front end need to be executed
* Note: We need Angular Cli@11.2.5 , Node:14.17.4 & Mongodb installed in the system to run this program accurately.
1. Clone the [git-repo](https://github.com/thotave/GVSU-CIS641-Vikings)
2. Instructions to run the backend
    -Change directory to backend using the command in the Pwsh/Cmd terminal
        -**$ cd src/EMS_Backend**
            - (install node modules if haven't done already using $ npm install)
        -Start backend connection using the command **$ nodemon index.js**
3. Once the backend gets connected we need to start the front end.
    -Open an other Pwsh/cmd terminal in the vscode withour closing the previous one.
4. Instructions to run the Frontend
    -Change directory to frontend by using the following command
    - **$ cd src/EMS_Frontend**
        - Install node modules if haven't done already using $ npm install
    - Start frontend using the command **$ ng serve -o**
    - Wait for the application to complete the build process and you will be redirected to login page.
5. Now both the front and backend are connected and application is ready to Use.


