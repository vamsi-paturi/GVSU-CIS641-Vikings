** The Follwing are the steps in order to run the EMS program succesfully in VS code.
* For this, backend need to started first and then the front end need to be executed
* Note: We need Angular Cli@11.2.5 , Node:14.17.4 & Mongodb installed in the system to run this program accurately.
1. Clone the [git-repo](https://github.com/thotave/GVSU-CIS641-Vikings)
2. Instructions to run the backend
    -Change directory to backend using the command in the Pwsh/Cmd terminal
    - **$ cd src/EMS_Backend**
        - Install node modules if haven't done already using $ npm install
    - Start backend connection using the command **$ nodemon index.js**
3. Once the backend gets connected we need to start the front end.
    -Open an other Pwsh/cmd terminal in the vscode withour closing the previous one.
4. Instructions to run the Frontend
    -Change directory to frontend by using the following command
    - **$ cd src/EMS_Frontend**
        - Install node modules if haven't done already using $ npm install
    - Start frontend using the command **$ ng serve -o**
    - Wait for the application to complete the build process and you will be redirected to login page.
5. Now both the front and backend are connected and application is ready to Use.
