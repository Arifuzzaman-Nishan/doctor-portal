import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <Col md={3}>
            <h5 className='text-danger fw-bold'>{props.menuName}</h5>
            <ul className='list-unstyled mt-4'>
                {
                    props.menuList.map((list, index) => <li key={index}>
                        <Link className="text-white" to={list.link}>{list.name}</Link>
                    </li>)
                }
            </ul>
            {props.children}
        </Col>
    );
};

export default FooterCol;