import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        closeModal();
        reset();

    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-center text-danger'>{appointmentOn}</h2>
                <p className='text-center text-secondary'><small>{date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className='form-control' placeholder='Your Name' {...register('name', { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className='form-control' placeholder='Your Phone Number' type="phone" {...register('mobile', { required: true })} />
                        {errors.mobile && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className='form-control' placeholder='Your Email' type="email" {...register('email', { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <Row className='form-group'>
                        <Col>
                            <select className="form-control" {...register('gender', { required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                                {errors.gender && <span className="text-danger">This field is required</span>}
                            </select>
                        </Col>
                        <Col>
                            <input {...register('age', { required: true })} className="form-control" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </Col>
                        <Col>
                            <input {...register('weight', { required: true })} className="form-control" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </Col>
                    </Row>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-danger">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;