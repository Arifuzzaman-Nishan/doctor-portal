import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import { Button, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]

    return (
        <footer className="footer-area p-5 text-white">
            <Container>
                <Row className='pt-3'>
                    <FooterCol key={1} menuName='.' menuList={noNamed} />
                    <FooterCol key={2} menuName='Services' menuList={services} />
                    <FooterCol key={3} menuName='Oral Health' menuList={oralHealth} />
                    <FooterCol key={4} menuName='Our Address' menuList={ourAddress}>
                        <ul className='list-inline social-media'>
                            <li className='list-inline-item'><a href="//facebook.com"><FontAwesomeIcon className='icon fb' icon={faFacebookF} /></a></li>
                            <li className='list-inline-item'><a href="//google.com"><FontAwesomeIcon className='icon google' icon={faGooglePlusG} /></a></li>
                            <li className='list-inline-item'><a href="//instagram.com"><FontAwesomeIcon className='icon insta' icon={faInstagram} /></a></li>
                        </ul>
                        <div className='mt-5'>
                            <h6>Call Now</h6>
                            <Button variant='danger'>+346546545</Button>
                        </div>
                    </FooterCol>
                </Row>
                <div className='text-center mt-5'>
                    <p className='fw-bold'>Copyright {(new Date()).getFullYear()} All rights Reversed</p>
                </div>
            </Container>
        </footer>

    );
};

export default Footer;