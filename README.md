# Welcome to Assessment Centre Management System Website (ACMS)
#### Developed By: [Kent Wong](https://git.fdmgroup.com/Kent.Wong), Jeriel Bongco, Vincent Chen, Stephanie Hirshman, David Ko

This project was created with
- Java Spring Boot - Backend
- React - Frontend
- MySql - Database

## Getting Started
**1️⃣ React Frontend**\
In the `react-frontend` project directory, you can run:

#### `npm install`

Install all the dependencies used in the project. 

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**2️⃣ Java Backend**\
In the `Springboot-backend` project directory, you can use Eclipse IDE to run `SpringbootBackendApplication.java`. \
The server port is configured to port 9003 in the `application.properties` file. 

To simplify the development process, ten(10) accounts are created automatically when the server is run. You may login to the accounts using the credentials below with `password` being the password: 
- AC: anureet.kaur@fdmgroup.com
- Recruiter: hannah.cope@fdmgroup.com
- Interviewer: matthew.hircock@fdmgroup.com

**3️⃣ MySql Database**\
The data source url is configured to `groupproject` in the `application.properties` file. Create the schema using the following code if it is not yet exist. 

```sql
CREATE SCHEMA `groupproject` ;
use groupproject;
```