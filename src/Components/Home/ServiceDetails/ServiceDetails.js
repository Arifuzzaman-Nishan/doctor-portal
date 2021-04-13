import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetails = ({service}) => {
    return (
        <Col md={4} className="text-center">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className='mt-3 mb-4'>{service.name}</h5>
            <p className='text-secondary mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, impedit?</p>
        </Col>
    );
};

export default ServiceDetails;