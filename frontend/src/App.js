import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import HomeIndexPage from './components/home/HomeIndexPage';
import ApplicantsIndexPage from './components/applicants/ApplicantsIndexPage';
import CalenderIndexPage from './components/calender/CalenderIndexPage';
import SupportIndexPage from './components/support/SupportIndexPage';
import ResultIndexPage from './components/results/ResultIndexPage';
import CreateApplicant from './components/applicants/CreateApplicant';
import InterviewForm from './components/applicants/InterviewForm';
import UpdateApplicant from './components/applicants/UpdateApplicant';
import SetupAC from './components/calender/coordinator/SetupAC';
import ViewResponse from './components/results/ViewResponse'

function App() {
  const userId = localStorage.getItem('user');

  if(!userId) {
    return <Login exact component={Login} />
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeIndexPage}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={HomeIndexPage}></Route>
          <Route path="/home" exact component={HomeIndexPage}></Route>
          <Route path="/applicants" exact component={ApplicantsIndexPage}></Route>
          <Route path="/calender" exact component={CalenderIndexPage}></Route>
          <Route path="/results" exact component={ResultIndexPage}></Route>
          <Route path="/support" exact component={SupportIndexPage}></Route>
          <Route path="/applicant/add" exact component={CreateApplicant}></Route>
          <Route path="/applicant/edit/:id" exact component={UpdateApplicant}></Route>
          <Route path="/applicant/interviewform" exact component={InterviewForm}></Route>
          <Route path="/setupAC" exact component={SetupAC}></Route>
          <Route path="/info/:id" exact component={ViewResponse}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
