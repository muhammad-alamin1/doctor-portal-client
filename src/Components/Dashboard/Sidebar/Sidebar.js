/* eslint-disable jsx-a11y/anchor-is-valid */
import { faCalendar, faFileAlt, faGripHorizontal, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuth } from '../../../Contexts/AuthContext';
import './sidebar.css';


const Sidebar = () => {
    const { logout } = useAuth();
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-0" style={{ height: '100vh', width: '220px' }}>
            <ul className="">
                <li>
                    <a href="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/users/appointment-booking" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment Booking</span>
                    </a>
                </li>

                <li>
                    <a href="/dashboard/admin/appointments/lists" className="text-white">
                        <FontAwesomeIcon icon={faUserFriends} /> <span>Patients</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/admin/prescriptions/lists" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescription</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/admin/add-doctor" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Doctor</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/admin/doctor/info" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Doctors Info</span>
                    </a>
                </li>
                <li>
                    <a href="/users/review" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Review</span>
                    </a>
                </li>
                <span className="material-icons-outlined" title="Logout" onClick={logout} style={{ cursor: 'pointer' }}  > logout </span>
            </ul>

        </div>
    );
};

export default Sidebar;