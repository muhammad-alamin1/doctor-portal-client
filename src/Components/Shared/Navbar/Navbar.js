/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-4 ms-5 mr-5 active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 ms-5 mr-5" href="/appointment">Appointment</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 ms-5 mr-5 " to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 ms-5 mr-5 text-white" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 ms-5 mr-5 text-white" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 ms-5 mr-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <a href="/login"><button type="button" className="btn-brand me-2">Sign In</button></a>
                    <a href="/signup"><button type="button" className="btn-brand">Sign Up</button></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;