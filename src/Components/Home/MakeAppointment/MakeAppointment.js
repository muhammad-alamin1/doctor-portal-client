import './makeAppointment.css';
import appointmentDoctor from '../../../images/appointment-doctor.png'
import React from 'react';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className="appointment ">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={appointmentDoctor} alt="" />
                    </div>
                    <div className="col-md-7 " style={{zIndex:9999}}>
                        <h5 className="my-4" style={{ color: '#1CC7C1' }}>APPOINTMENT</h5>
                        <h2 className="text-white my-3">Make an appointment Today</h2>
                        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</p>
                        <Link to="/appointment"><button type="button" className="btn-brand my-5">Get Appointment</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;