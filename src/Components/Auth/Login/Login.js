import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import LoginBg from '../../../images/loginBg.png';
import Navbar from '../../Shared/Navbar/Navbar';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const history = useNavigate();


    // login submit form
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError('');
            setLoading(true);

            await login(email, password);
            setSuccess('Login Successfully.!');
            history('/dashboard');
        } catch (error) {
            console.log(error);
            setError('Authentication failed.!');
            setSuccess('');
            setLoading(false);
        }
    }

    document.title = 'Login';
    return (
        <div className="login-form container">
            <Navbar />
            <div className="row align-items-center">
                <div className="col-md-6  login-left">
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <br />

                        {
                            error && <p className="error">{error}</p>
                        }
                        {
                            success && <p className="success">{success}</p>
                        }

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