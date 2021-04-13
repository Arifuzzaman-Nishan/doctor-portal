import React, { useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const AppointmentHeader = ({handleDateChange}) => {
    // const [value, onChange] = useState(new Date());
    

    return (
        <main>
            <Row style={{ height: '600px' }} className="d-flex align-items-center">
                <Col className='offset-md-1' md={4}>
                    <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </Col>
                <Col md={6}>
                    <Image src={chair} fluid></Image>
                </Col>
            </Row>
        </main>
    );
};

export default AppointmentHeader;