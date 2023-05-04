/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };
  return (
    <div className="w-25 mx-auto border p-3 mt-4 rounded lh-lg">
    <h3 className="text-center text-primary" >Login Here!!</h3>
      <Form onSubmit={handleSubmit}>      
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button className="mt-4" variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <p><small>New User? Please register <Link to="/register">Login</Link>.</small></p>
    </div>
  );
};

export default Login;