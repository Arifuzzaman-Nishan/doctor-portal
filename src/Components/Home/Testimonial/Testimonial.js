import React from 'react';
import { Row } from 'react-bootstrap';
import boy from '../../../images/boy.png';
import girl1 from '../../../images/girl1.png';
import girl2 from '../../../images/girl2.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const testimonialData = [
    {
        name: 'Winson Herry',
        img: boy,
        home: 'california'
    },
    {
        name: 'Winson Herry',
        img: girl1,
        home: 'california'
    },
    {
        name: 'Winson Herry',
        img: girl2,
        home: 'california'
    }
]

const Testimonial = () => {
    return (
        <section className='container p-5'>
            <div className='mb-5'>
                <h5>TESTIMONIAL</h5>
                <h1>What's Our Patients <br /> Says</h1>
            </div>
            <Row>
                {
                    testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }
            </Row>
        </section>
    );
};

export default Testimonial;