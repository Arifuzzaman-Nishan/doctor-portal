import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <Col md={4} className='text-white'>
            <div className={`d-flex justify-content-center align-items-center info-container info-${info.background}`}>
                <div className='mr-3'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </Col>
    );
};

export default InfoCard;