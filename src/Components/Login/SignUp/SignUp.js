import React from 'react';
import signUpBg from '../../../images/loginBg.png';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit} = useForm();

    const history = useHistory();

    const onSubmit = data => {
        data.created = new Date();

        fetch(`http://localhost:5000/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(success => {
            if(success) {
                setTimeout(() => {
                    alert('User Created Successfully.!');
                    //after submit form redirect user
                }, 1000);
                
            }
        })
        history.push('/login');
    };

    // title
    document.title = 'Sign Up';
    return (
        <div className="login-form container">
            <Navbar />
            <div className="row align-items-center">
                <div className="col-md-6  login-left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username">User name</label>
                        <input type="text" ref={register({ required: true })} name="userName" className="form-control" id="username" required />
                        <br />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" ref={register({ required: true })} name="email" className="form-control" id="email" required />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={register({ required: true })} name="password" className="form-control" id="password" required />
                        <br/>
                        <input type="submit" className="btn-brand" value="Sign Up" />
                    </form>
                    
                </div>
                <div className="col-md-6 login-right">
                    <img src={signUpBg} alt="loginBG" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;