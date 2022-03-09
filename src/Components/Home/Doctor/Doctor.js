import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Doctor = ({ doctors }) => {
    // console.log(doctors)
    return (
        <div>
            {
                doctors.map((doctor, index) =>
                    <div className="">
                        <div id="BlogCard">
                            <div className="card-container">
                                <div className="card" style={{ marginBottom: '100px' }}>
                                    <div className="card-header d-flex  align-items-center">
                                        <img style={{ width: '250px' }} className="img-fluid" src={`http://localhost:5000/uploads/${doctor.images}`} alt={doctor.name} />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="" style={{ color: '#1CC7C1' }}>{doctor.name}</h4>
                                        <p className="m-0">E-mail :  {doctor.email}</p>
                                        <p>Phone :  {doctor.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Doctor;
