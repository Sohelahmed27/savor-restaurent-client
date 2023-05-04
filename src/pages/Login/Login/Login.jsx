/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;
   
    console.log(email, password);


    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate('/chefs/:id')
    })
   
    .catch(err => {
      console.log(err);
    })
    

    
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
          name="email"
          
        required/>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name = "password"
        required/>
      </Form.Group>
      <Button className="mt-4" variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p><small>New User? Please register <Link to="/register">Register</Link>.</small></p>
    </div>
  );
};

export default Login;