import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:30 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 style={{ color: '#1cc7c1' }} className='text-center'>Available Appointment on {date.toDateString()}</h2>
            <Container>
                <Row className='mt-5 mb-5'>
                    {
                        bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BookAppointment;