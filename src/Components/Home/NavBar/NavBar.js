import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand Link="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><Link className = 'navi mr-5' to="/home">Home</Link></Nav.Link>
                    <Nav.Link> <Link className = 'navi mr-5' to="/about">About</Link></Nav.Link>
                    <Nav.Link> <Link className = 'navi mr-5' to="/dentalServices">Dental Services</Link></Nav.Link>
                    <Nav.Link> <Link className = 'navi mr-5' to="/Reviews">Reviews</Link></Nav.Link>
                    <Nav.Link><Link className = 'navi mr-5' to="/blog">Blog</Link></Nav.Link>
                    <Nav.Link> <Link className = 'navi mr-5' to="contactUs">Contact Us</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;