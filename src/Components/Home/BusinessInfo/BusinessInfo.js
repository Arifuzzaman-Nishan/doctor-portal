import React from 'react';
import { Row } from 'react-bootstrap';
import InfoCard from '../InfoCard/InfoCard';

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'



const infosData = [
    {
        title:'Opening Hours',
        description:'We are open 7 days',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit Our Location',
        description:'Brooklyn, NY 10003',
        icon:faMapMarkerAlt,
        background:'dark'
    },
    {
        title:'Call us now',
        description:'+159664684864',
        icon:faPhoneVolume,
        background:'primary'
    }

]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <Row className='w-75'>
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </Row>
        </section>
    );
};

export default BusinessInfo;