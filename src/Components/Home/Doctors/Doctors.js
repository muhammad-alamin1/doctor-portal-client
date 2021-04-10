import './doctors.css';
import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section id="doctors-section" style={{margin:'50px'}}>
            <div className="container">
                <h5 style={{ color: '#1CC7C1' }} className="text-center text-uppercase">Our Doctors</h5>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </section>
    );
};

export default Doctors;