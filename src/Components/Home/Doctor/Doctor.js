import React from 'react';
import { Col, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png';

const doctorData = [1, 2, 3];

const Doctor = () => {
    return (
        <section className='mb-5'>
            <h2 className='text-center'>Our Doctors</h2>
            <Row>
                {
                    doctorData.map((index) => <Col md={4} key={index}>
                        <img src={doctor} className='img-fluid' alt="" />
                        <div className='text-center'>
                            <h5>Dr. Caudi</h5>
                            <p className='text-secondary'>+24152345</p>
                        </div>
                    </Col>)
                }
            </Row>
        </section>
    );
};

export default Doctor;