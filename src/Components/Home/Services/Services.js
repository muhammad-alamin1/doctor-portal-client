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
        description: 'A clinical exercise session is a personalised and tailored program to help you recover from an injury, achieve your health goals, and stay injury-free. In one session we can use different equipment including reformers, trapeze tables, weights, kettlebells, TRX, resistance bands, and floor-based exercises.'
    },
    {
        id:2,
        name:'Cavity Filling',
        img:cavity,
        description: 'Hydrotherapy is physiotherapy in warm water. The buoyancy and warmth of the water allows for freer movement than on land, so you can exercise with ease for health, rehabilitation, and wellbeing without placing additional pressure on your joints.'
    },
    {
        id:3,
        name:'Teeth Whitening',
        img:whitening,
        description: 'Hand therapists evaluate and test the injured limb to assess what treatment is required to restore movement and flow. They design specific treatment programs and work closely with reputable hand surgeons, providing recommendations as required.'
    },
];

const Services = () => {


    return (
        <section className="services-container">
            <div className="text-center mt-5">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Our services support every body at every life stage.</h2>
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