import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import dentalCare from '../../../images/dentalCare.png';

const DentalCare = () => {
    return (
        <section className='container'>
            <Row>
                <Col md={5}>
                    <img className='img-fluid' src={dentalCare} alt="" />
                </Col>
                <Col md={6}>
                    <h1 className='mt-5'>
                        Exceptional Dental
                        <br />
                        Care, on Your Terms
                    </h1>
                    <p className='text-secondary text-justify mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio facilis consequatur tempora beatae voluptatum eos, sit vitae. Nemo assumenda ab dolorem ratione vel animi consequatur, ipsa, aliquam quisquam beatae amet eum fuga consequuntur quo placeat inventore eligendi non veniam voluptate commodi ipsum. Ab praesentium aperiam nisi, commodi impedit unde nihil.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur obcaecati, unde labore facere officia aperiam quasi nemo blanditiis consectetur ab qui fuga deserunt ipsam minus quas perspiciatis pariatur mollitia molestiae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur saepe ipsum exercitationem voluptatum numquam sit recusandae earum? Iusto repellat provident dolorem alias, labore minus accusamus placeat quo neque fuga!</p>
                    <Button variant='danger'>Learn More</Button>
                </Col>
            </Row>
        </section>
    );
};

export default DentalCare;