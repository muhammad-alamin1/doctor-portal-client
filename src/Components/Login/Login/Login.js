/* eslint-disable jsx-a11y/anchor-is-valid */
import './login.css';
import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import LoginBg from '../../../images/loginBg.png';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        success: false,
        error: '',
    });


    // submit form
    const handleSubmit = (event) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                const user = response.user;
                const newUserInfo = { ...user };
                newUserInfo.success = true;
                newUserInfo.error = '';
                setUser(newUserInfo);

            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo)
            });
        event.preventDefault();
    }
    // handle blur
    const handleChange = (event) => {
        const newUserInfo = { ...user};
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo)
    }
    return (
        <div className="login-form container">
            <Navbar />
            <div className="row align-items-center">
                <div className="col-md-6  login-left">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">E-mail</label>
                        <input type="email" onBlur={handleChange} name="email" className="form-control" required />
                        <br />
                        <label htmlFor="">Password</label>
                        <input type="password" onBlur={handleChange} name="password" className="form-control" required />
                        <br />
                        <input type="submit" className="btn-brand" value="Sign In" />
                    </form>
                    {/* success and error messages*/}
                    {
                        user.success && <p className="my-3" style={{color:'green'}}>Sign In Successfully</p>
                    }
                    <p style={{color:'red'}}>{user.error}</p>
                </div>
                <div className="col-md-6 login-right">
                    <img src={LoginBg} alt="loginBG" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Login;