import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import HomeIndexPage from './components/home/HomeIndexPage';
import ApplicantsIndexPage from './components/applicants/ApplicantsIndexPage';
import CalenderIndexPage from './components/calender/CalenderIndexPage';
import SupportIndexPage from './components/support/SupportIndexPage';
import ResultIndexPage from './components/results/ResultIndexPage';
import TestREMOVEBEFORESUBMISSIONIndexPage from './components/testREMOVEBEFORESUBMISSION/TestREMOVEBEFORESUBMISSIONIndexPage'
import CreateApplicant from './components/applicants/CreateApplicant';

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
          <Route path="/TestREMOVEBEFORESUBMISSION" exact component={TestREMOVEBEFORESUBMISSIONIndexPage}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
