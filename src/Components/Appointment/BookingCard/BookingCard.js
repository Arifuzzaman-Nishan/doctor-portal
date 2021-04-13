import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking,date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Col md={4}>
            <Card className='mb-5 p-3' style={{ width: '18rem' }}>
                <Card.Body className='text-center'>
                    <Card.Title>{booking.subject}</Card.Title>
                    <Card.Text>
                        <h6>{booking.visitingHour}</h6>
                        <p className='text-secondary'><small>{booking.totalSpace} SPACE AVAILABLE</small></p>
                    </Card.Text>
                    <Button onClick={openModal} variant="danger">BOOK APPOINTMENT</Button>
                    <AppointmentForm date={date} appointmentOn = {booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookingCard;