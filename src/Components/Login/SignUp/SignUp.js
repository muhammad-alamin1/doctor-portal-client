/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import signUpBg from '../../../images/loginBg.png';
import Navbar from '../../Shared/Navbar/Navbar';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {

    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        success: false,
        error: '',
    });

    // submit form 
    const handleSubmit = (event) => {
        console.log(user.email , user.password);
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((response) => {
                    const user = response.user;
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    console.log(user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // console.log(errorCode, errorMessage)
                });
        event.preventDefault();
        
    }

    // input handle change event
    const handleChange = (event) => {
        // console.log(event.target.name,event.target.value);
        const newUserInfo = { ...user };
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
    }

    return (
        <div className="login-form container">
            <Navbar />
            <div className="row align-items-center">
                <div className="col-md-6  login-left">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">User name</label>
                        <input type="text" onBlur={handleChange} name="userName" className="form-control" required />
                        <br />
                        <label htmlFor="">E-mail</label>
                        <input type="email" onBlur={handleChange} name="email" className="form-control" required />
                        <br />
                        <label htmlFor="">Password</label>
                        <input type="password" onBlur={handleChange} name="password" className="form-control" required />
                        <br/>
                        <input type="submit" className="btn-brand" value="Sign Up" />
                    </form>
                    {/* success message & error*/}
                    {
                        user.success && <p style={{color:'green'}}>User Create Successfully</p>
                    }
                    <p style={{color:'red'}} className="my-3">{user.error}</p>
                    
                </div>
                <div className="col-md-6 login-right">
                    <img src={signUpBg} alt="loginBG" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;