import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TestimonialDetails = ({ testimonial }) => {
    return (
        <Col md={4}>
            <Card className='mb-5'>
                <p className='p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam assumenda maiores quis qui nesciunt officia aliquam, sint, saepe deleniti sed! Natus mollitia ab minima cum maiores, voluptatem asperiores sed.</p>
                <div className='d-flex align-items-center p-5 justify-content-around'>
                    <img src={testimonial.img} alt="" />
                    <div>
                        <h6>{testimonial.name}</h6>
                        <p>{testimonial.home}</p>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default TestimonialDetails;