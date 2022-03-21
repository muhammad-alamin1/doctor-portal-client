
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import AllPatientsPrescription from './Components/AllPatientsPrescription/AllPatientsPrescription/AllPatientsPrescription';
import SendPrescription from './Components/AllPatientsPrescription/SendPrescription/SendPrescription';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Auth/Login/Login';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/Auth/PublicRoute/PublicRoute';
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
          <Route path="/dashboard/users/appointment-booking" element={<PrivateRoute><Appointment /></PrivateRoute>} />
          <Route path="/dashboard/admin/appointments/lists" element={<PrivateRoute><AllPatients /></PrivateRoute>} />
          <Route path="/dashboard/admin/prescriptions/lists" element={<PrivateRoute><AllPatientsPrescription /></PrivateRoute>} />
          <Route path="/dashboard/admin/prescription/send" element={<PrivateRoute><SendPrescription /></PrivateRoute>} />
          <Route path="/dashboard/admin/add-doctor" element={<PrivateRoute><AddDoctor /></PrivateRoute>} />
          <Route path="/dashboard/admin/doctor/info" element={<PrivateRoute><DoctorInfo /></PrivateRoute>} />
          <Route path="/users/review" element={<PrivateRoute><Review /></PrivateRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /> </PublicRoute>} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
