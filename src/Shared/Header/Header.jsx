/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ fontSize: "50px" }} >Savor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
         <Nav  className="mx-auto text-decoration-none  fs-6">
            <Link style={{ fontSize: "22px" }} className="text-decoration-none " to='/'>Home</Link>
            <Link style={{ fontSize: "22px" }}  className="text-decoration-none mx-5" to="/chefs">Our Chefs</Link>
            <Link style={{ fontSize: "22px" }}  className="text-decoration-none" to="/blog">Blog</Link>
            </Nav>
          <Nav>
           <Image src=''></Image>
            <Link style={{ fontSize: "22px" }}  className="text-decoration-none mx-3" to="/login">Login</Link>
            <Link style={{ fontSize: "22px" }}  className="text-decoration-none " to="/register">Register</Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;