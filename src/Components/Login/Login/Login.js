import './login.css';
import React from 'react';
import LoginBg from '../../../images/loginBg.png';
import Navbar from '../../Shared/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {
    const history = useHistory();
    const { register, handleSubmit} = useForm();

    // login submit form
    const onSubmit = data => {
        console.log(data);
        
        axios.post(`http://localhost:5000/users/login`, {
            email: data.email,
            password: data.password
        })
        .then(success => {
           console.log(success);
        })
        .catch(error => {
            console.error(error);
        });

        history.push('/dashboard');
    }

    document.title = 'Login';
    return (
        <div className="login-form container">
            <Navbar />
            <div className="row align-items-center">
                <div className="col-md-6  login-left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" ref={register({ required: true })} name="email" className="form-control" id="email" required />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={register({ required: true })} name="password" className="form-control" required />
                        <br />
                        <input type="submit" className="btn-brand" value="Sign In" />
                    </form>
                </div>
                <div className="col-md-6 login-right">
                    <img src={LoginBg} alt="loginBG" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Login;