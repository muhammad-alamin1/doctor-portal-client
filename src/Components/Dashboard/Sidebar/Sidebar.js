/* eslint-disable jsx-a11y/anchor-is-valid */
import './sidebar.css';
import React from 'react';
import { a } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faCalendar, faUserFriends, faFileAlt, faCog, faSignOutAlt ,faUser} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: '100vh' }}>
            <ul className="">
                <li>
                    <a href="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/appointments" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </a>
                </li>
                
                <li>
                    <a href="/appointments" className="text-white">
                        <FontAwesomeIcon icon={faUserFriends} /> <span>Patients</span>
                    </a>
                </li>
                <li>
                    <a href="/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescription</span>
                    </a>
                </li>
                <li>
                    <a href="/adddoctor" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Doctor</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white">
                        <FontAwesomeIcon icon={faCog} /><span>Settings</span>
                    </a>
                </li>
                <div style={{ marginTop: '260px' }}>
                    <a style={{ textDecoration: 'none' }} href="/home" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></a>
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;