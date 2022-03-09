import './doctors.css';
import React, { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    fetch(`http://localhost:5000/doctor/all`)
        .then(response => response.json())
        .then(data =>{
            setDoctors(data.allDoctors);
        })
    return (
        <section id="doctors-section" >
            <div className="container">
                <div className="">
                    <h5 style={{ color: '#1CC7C1' }} className="text-uppercase">Our Doctors</h5>
                </div>
                <div className="row">
                    <Doctor doctors={doctors} />
                </div>
            </div>
        </section>
    );
};

export default Doctors;