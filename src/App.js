
import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/Login/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import NotFound from './Components/NotFoundPage/NotFound';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import AllPatientsPrescription from './Components/AllPatientsPrescription/AllPatientsPrescription/AllPatientsPrescription';
import MainDashboard from './Components/Dashboard/MainDashboard/MainDashboard';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import Review from './Components/Dashboard/Review/Review';


// Create Context
export const userContext = createContext();  // not use of Context Api & Private Route

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    success: false,
    error: '',
  });

  return (
    <userContext.Provider value={[user, setUser]}>
      <Router >
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dashboard/appointments">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <MainDashboard />
          </Route>
          <Route path="/appointments">
            <AllPatients />
          </Route>
          <Route path="/prescriptions">
            <AllPatientsPrescription />
          </Route>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
