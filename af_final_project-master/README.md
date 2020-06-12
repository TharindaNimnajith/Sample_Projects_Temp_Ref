### Sri Lanka Institute of Information Technology

## Student and Instructor Information System

#### User Guide

##### APPLICATION FRAMEWORKS - SE

###### Submitted by:

###### IT17016230 - Saranga S.A.G.

###### IT17006880 - De Silva N.

###### IT17012966 - L.S. Jayasinghe

###### IT17410250 - M.V Lakshitha

###### Weekend Batch

###### Group No: WE 25



# Contents

**Installation and Setup ---------------------------------------------------------------------------------------------------------- 1**

**Getting Started ----------------------------------------------------------------------------------------------------------------- 3**



## This following document contains the user guide for installation and initial setup of the School

Management System developed by the members of this project.

##### Installation and Setup

Pre-requisites before installation and setup

- NodeJS with npm
- Git
- IDE such as IntelliJ Webstorm or IntelliJ Ultimate

Note: The following steps and procedures are per formed using IntelliJ Ultimate as the IDE and
MongoDB Compass to connect with the remote database.

- Node version used- v10.14.
- Npm version used- 6.4.

Steps to install and setup are as follows:

- Open your command prompt at the location where you want the project folder to be created and
    type the following command at the console:

```
“git clone https://github.com/gihanrcg/af_final_project.git ”
```
```
The project folder should be created at the location
```

```
2 | P a g e
```
```
➢ Alternatively you can also visit https://github.com/gihanrcg/af_final_project , download
the zipped version of this project and open the extracted project using the IDE.
```
- Once the process finishes as given above, open the project using the IDE. To do this go to
    File --> Open and select the newly created project folder and click “OK”
- Then open the terminal tab located at the bottom right hand corner of the screen in the IDE and
    type the following command:

```
“npm install”
```
```
This will install the required dependencies for the server.
```
```
Now we have to repeat this process with the client. To do this, open the terminal as before and
type “cd client” to move to the client directory now type “npm install” again to download the
required client dependencies.
```
```
Note: An active internet connection should be present in order to download the
dependencies for the above steps.
```

```
3 | P a g e
```
##### Getting Started

Once the initial setup process is complete, the project can be started as follows:

- Open the terminal tab located at the bottom right hand corner of the screen, (as in the previous
    steps) in the IDE and type the following command:

```
“npm run dev”
```
```
Running this command should automatically run the server and client processes concurrently and
automatically launch the browser as follows
```
```
You can start using the application by first creating an account by clicking on the “SignUp” button.
```

