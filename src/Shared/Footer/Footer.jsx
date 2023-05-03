/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light pt-5 mt-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md={4}>
            <h4>About Us</h4>
            <p>British cuisine has been influenced by various cultures, and there is a growing emphasis on sustainability and using locally sourced, seasonal ingredients.</p>
          </Col>
          <Col md={4}>
            <h4>Subscribe to Our Newsletter</h4>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">Subscribe</Button>
            </Form>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>1234 Main Street</li>
              <li>Suite 567</li>
              <li>London, UK 12345</li>
              <li>(123) 456-7890</li>
              <li>info@savor.com</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-muted small">&copy; {new Date().getFullYear()} Savor. All rights reserved.</p>
          </Col>
          <Col className="text-end">
            <p className="text-muted small">Made with <i className="fas fa-heart"></i> by cosmic travalar</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;