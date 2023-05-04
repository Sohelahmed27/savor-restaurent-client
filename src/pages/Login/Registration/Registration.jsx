/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Registration = () => {
  const {createUser} = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photo,email, password, confirm);

    createUser(email, password)
    .then(result => {
      const createUser = result.user;
      setUser(createUser)
    })
    .catch(err => {
      setError(err)
    })
  };
  return (
    <div className="w-25 mx-auto border p-3 mt-4 rounded lh-lg">
    <h3 className="text-center text-primary" >Please Register</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name ="name"
          required/>
      </Form.Group>
      <Form.Group controlId="formPhoto">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Photo_URL"
          name="photo"
          
        required/>
      </Form.Group>
      

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
          name='password'
          
        required/>
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm your password"
          name ='confirm'
          
        required/>
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="accept" label="Accept terms and conditions" required/>
      </Form.Group>

      <Button className="mt-4" variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <p><small>Already have an account? Please login <Link to="/login">Login</Link>.</small></p>

    <Form.Text className="text-success">
        {user?'Account successfully created' :'Provide right email and password' }
        </Form.Text>
        {/* <Form.Text className="text-danger">
        {error && 'Provide right email and password'}
        </Form.Text> */}
    </div>
  );
};

export default Registration;