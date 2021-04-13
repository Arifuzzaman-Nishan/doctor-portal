import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='appointment-container'>
            <Container>
                <Row>
                    <Col className='d-none d-md-block' md={6}>
                        <img className='img-fluid' src={doctor} alt="" />
                    </Col>
                    <Col md={6} className='py-5 text-white'>
                        <h6>APPOINTMENT</h6>
                        <h2>Make an appointment <br/> Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequuntur.</p>
                        <div>
                            <Button variant='danger'>
                                Learn More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MakeAppointment;