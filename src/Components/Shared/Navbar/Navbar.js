/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-4 ms-5 mr-5 active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4 ms-5 mr-5" href="/appointment">Appointment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4 ms-5 mr-5 " href="/dashboard/appointment">Shedule</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4 ms-5 mr-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4 ms-5 mr-5 text-white" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4 ms-5 mr-5 text-white" href="#">Contact Us</a>
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