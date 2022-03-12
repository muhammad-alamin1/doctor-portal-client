import './testimonial.css';
import React from 'react';

const Testimonial = (props) => {
    const { message, name, stars, avatar } = props.testimonial;
    return (
        <div id="card">
            <div className="card-container ">
                <div className="card" style={{ marginBottom: '100px' }}>
                    <div className="card-body">
                        <p className="card-text text-center">{message}</p>
                    </div>
                    <div className="d-flex align-items-center text-center">
                        <img src={`http://localhost:5000/uploads/${avatar}`} alt="person" className="mx-3 " style={{ 'width': '180px' }} />
                        <div className="">
                            <h6 style={{ color: '#1CC7C1' }}>{name}</h6>
                            <p>{stars} stars</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;