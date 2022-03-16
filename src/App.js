
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import AllPatientsPrescription from './Components/AllPatientsPrescription/AllPatientsPrescription/AllPatientsPrescription';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Auth/Login/Login';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import SignUp from './Components/Auth/SignUp/SignUp';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import DoctorInfo from './Components/Dashboard/DoctorInfo/DoctorInfo';
import MainDashboard from './Components/Dashboard/MainDashboard/MainDashboard';
import Review from './Components/Dashboard/Review/Review';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFoundPage/NotFound';
import { AuthProvider } from './Contexts/AuthContext';


function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute ><MainDashboard /></PrivateRoute>} />
          <Route path="/dashboard/users/appointment-booking" element={<Appointment />} />
          <Route path="/dashboard/admin/appointments/lists" element={<AllPatients />} />
          <Route path="/dashboard/admin/prescriptions/lists" element={<AllPatientsPrescription />} />
          <Route path="/dashboard/admin/add-doctor" element={<AddDoctor />} />
          <Route path="/dashboard/admin/doctor/info" element={<DoctorInfo />} />
          <Route path="/users/review" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
