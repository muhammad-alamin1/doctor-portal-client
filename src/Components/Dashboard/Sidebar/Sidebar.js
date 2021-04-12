import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faGripHorizontal, faCalendar, faUserFriends , faFileAlt , faCog} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: '100vh' }}>
            <ul className="">
            <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faUserFriends} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescription</span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faCog} /><span>Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;