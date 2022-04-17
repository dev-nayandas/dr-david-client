import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';



const Header = () => {
    return (
        
        <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href='/home'>Dr. David</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/aboutMe">Aboute Me</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;