import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main>
            <Row style={{height:'600px'}} className="d-flex align-items-center">
                <Col className='offset-md-1' md={4}>
                    <h1>Your new smile <br/> starts here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum magnam molestias, placeat voluptates quidem</p>
                    <Button variant="danger">GET APPOINTMENT</Button>
                </Col>
                <Col md={6}>
                    <Image src={chair} fluid></Image>
                </Col>
            </Row>
        </main>
    );
};

export default HeaderMain;