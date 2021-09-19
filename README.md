# Welcome to Assessment Centre Management System Website (ACMS)
#### Developed By: [Kent Wong](https://git.fdmgroup.com/Kent.Wong), [Jeriel Bongco](https://git.fdmgroup.com/Jeriel.Bongco), [Vincent Chen](https://git.fdmgroup.com/Vincent.Chen1), [Stephanie Hirshman](https://git.fdmgroup.com/Stephanie.Hirshman), [David Ko](https://git.fdmgroup.com/David.Ko)

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


## Website Walkthrough
This is the login page. 
![loginpage](/demo/login.JPG)

This is the ACMS homepage where user can see all the overview, updates, reminder, calender and quick links. 
![homepage](/demo/homepage.JPG)

This is the applicant's list where user can search, filter, sort, and export data to pdf or excel. User can download the cv, email users using preloaded email templates, add, update, and delete users. Admin can also assign recruiter to new applicants in this page. 
![applicantslist](/demo/applicants.JPG)

This is the calender page where user can see all AC created and create new AC. 
![AC](/demo/ac.JPG)

This the result page where user can see the results after interview is conducted. 
![results page](https://git.fdmgroup.com/Vincent.Chen1/assessment-centre-group-project---team-b/blob/master/demo/results.png)

This is the help and support page where user can download commonly used documents, manage accounts, and have quick links to video tutorials and commonly used recruitement websites. 
![support page](/demo/support.JPG)

All users can update their own profile or change their password.
![update profile page](/demo/updateaccount.JPG)


