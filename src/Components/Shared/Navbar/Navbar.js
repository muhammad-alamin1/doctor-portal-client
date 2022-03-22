/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";

const Navbar = () => {
  const { currUser, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a
          style={{ fontSize: "30px", marginLeft: "30px" }}
          className="navbar-brand"
          href="#"
        >
          Life Care
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link ms-4 ms-5 mr-5 active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ms-4 ms-5 mr-5"
                to="/dashboard/users/appointment-booking"
              >
                Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-4 ms-5 mr-5 " to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          {currUser ? (
            <>
              <span className="material-icons-outlined" title="Account">
                account_circle
              </span>
              <span>{currUser.displayName}</span>
              <span
                className="material-icons-outlined"
                title="Logout"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                {" "}
                logout{" "}
              </span>
            </>
          ) : (
            <>
              <Link to="/login">
                <button type="button" className="btn-brand me-2">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn-brand">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
