import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        
        <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Dr. David</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Services</Nav.Link>
          <Nav.Link href="#features">Blogs</Nav.Link>
          <Nav.Link href="#pricing">Aboute Me</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;