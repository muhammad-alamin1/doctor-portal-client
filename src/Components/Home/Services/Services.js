import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        id:1,
        name:'Fluoride Treatment',
        img:fluoride,
    },
    {
        id:2,
        name:'Cavity Filling',
        img:cavity,
    },
    {
        id:3,
        name:'Teeth Whitening',
        img:whitening,
    },
];

const Services = () => {


    return (
        <section className="services-container">
            <div className="text-center mt-5">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="mt-5 mt-5 w-75 row">
                    {
                        servicesData.map(service =><ServiceDetail key={service.id} service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;