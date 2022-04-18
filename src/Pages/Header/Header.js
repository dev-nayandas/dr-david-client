import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Blogs from '../Blogs/Blogs';



const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth)
  }
    return (
        
        <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href='/home'>Dr. David</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/aboutMe">About Me</Nav.Link>
          { user ?
              <button onClick={handleSignOut} className='btn btn-info'>Sign out</button>
            :
            <Nav.Link href="/login">Login</Nav.Link>
          }
          
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;