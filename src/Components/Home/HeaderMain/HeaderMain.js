import './headerMain.css';
import React from 'react';
import chair from '../../../images/chari.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center" id="header-main">
            <div className="col-md-4 offset-1">
                <h1>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className="btn-brand">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;