/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Container } from "react-bootstrap";
import img from "../../assets/blog1.jpg";

const Blog = () => {
  return (
    <div>
    
      <Card>
        <Card.Img style={{ height: "400px" }} variant="top" src={img} />
        <Container>
        <h1 className="text-center text-primary">Common Query about React app</h1>
          <Card.Body>
            <Card.Title style={{fontSize:'25px', color:'blue'}}>
              
              Differences between uncontrolled and controlled components.
            </Card.Title>
            <Card.Text className='fw-bold'>
              In React,Controlled components manage form data
              through their state . Uncontrolled components rely on the DOM
              to manage the form data. The main difference is that with
              controlled components has complete control over the
              form data.In uncontrolled components, the DOM handles the data management.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title style={{fontSize:'25px', color:'blue'}}>
              
            How to validate React props using PropTypes?
            </Card.Title>
            <Card.Text className='fw-bold'>
            Props and PropTypes are important mechanisms for passing read-only attributes between React components.
            We can use React props to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in the app.

            We can validate React props using PropTypes by importing the PropTypes library and adding a propTypes property to our component, which specifies the expected prop types and their requiredness.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title style={{fontSize:'25px', color:'blue'}}>
              
            What are the difference between nodejs and express js.?
            </Card.Title>
            <Card.Text className='fw-bold'>
            Node.js is a platform for building the i/o applications which are server-side event-driven.
            It is built on Google’s V8 engine.It requires more coding time than express.js. It do not uses middleware for the arrangement of functions systematically server-side.
            <br />
            <br />
            On the other hand, Node.jsExpress.js is a framework based on Node.js which is used for building web-application.It requires less coding time. It uses middleware for the arrangement of functions systematically server-side.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title style={{fontSize:'25px', color:'blue'}}>
              
            4. What is a custom hook, and we should create a custom hook?
            </Card.Title>
            <Card.Text className='fw-bold'>
            A custom Hook is a JavaScript function whose name starts with ”use”. It may call other Hooks.
            Custom hooks  can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to rendering the whole code.
            </Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </div>
  );
};

export default Blog;
