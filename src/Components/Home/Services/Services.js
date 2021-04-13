import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]
const Services = () => {
    return (
        <section className='mt-5 p-5'>
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center mt-5 p-5'>
                <Row className='w-75'>
                    {
                        serviceData.map(service => <ServiceDetails service ={service}></ServiceDetails>)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Services;