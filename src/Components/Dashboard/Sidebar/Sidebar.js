/* eslint-disable jsx-a11y/anchor-is-valid */
import { faCalendar, faFileAlt, faGripHorizontal, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import './sidebar.css';


const Sidebar = () => {
    const { logout } = useAuth();
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-0" style={{ height: '100vh', width: '220px' }}>
            <ul className="">
                <li>
                    <Link to="/" className="text-white">
                        <h3>Life Care</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/users/appointment-booking" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment Booking</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admin/appointments/lists" className="text-white">
                        <FontAwesomeIcon icon={faUserFriends} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admin/prescription/send" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescription Send</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admin/prescriptions/lists" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescription Info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admin/add-doctor" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admin/doctor/info" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Doctors Info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/users/review" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Review</span>
                    </Link>
                </li>
                <span className="material-icons-outlined" title="Logout" onClick={logout} style={{ cursor: 'pointer' }}  > logout </span>
            </ul>
        </div>
    );
};

export default Sidebar;