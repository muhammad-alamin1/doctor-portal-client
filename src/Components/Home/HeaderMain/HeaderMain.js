import './headerMain.css';
import React from 'react';
import chair from '../../../images/chari.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center" id="header-main">
            <div className="col-md-4 offset-1">
                <h1>WE'LL HELP YOU TO
                    GET BETTER, FEEL BETTER
                    AND STAY BETTER.</h1>
                <p className="text-secondary">Movement matters when it comes to enjoying life. Whether it's improving it, maintaining it or optimising it, our team of leading physiotherapists and allied health professionals have the expertise to guide your exercise or recovery goals.</p>
                <Link to="/appointment"><button className="btn-brand">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;