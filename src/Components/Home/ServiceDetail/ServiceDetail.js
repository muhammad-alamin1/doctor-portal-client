import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height:'50px'}} src={service.img} alt="services img" />
            <h5 className="my-4">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
    );
};

export default ServiceDetail;