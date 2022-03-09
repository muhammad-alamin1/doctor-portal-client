import './testimonial.css';
import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div id="card">
            <div className="card-container ">
                <div className="card   " style={{marginBottom:'100px'}}>
                    <div className="card-body">
                        <p className="card-text text-center">{quote}</p>
                    </div>
                    <div className=" d-flex align-items-center text-center ">
                        <img src={img} alt="person" className="mx-3 " />
                        <div className="">
                            <h6 style={{ color: '#1CC7C1' }}>{name}</h6>
                            <p>{from}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;