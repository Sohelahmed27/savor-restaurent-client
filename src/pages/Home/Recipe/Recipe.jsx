/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { FaBookmark, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { toast, Toaster } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  
  const handleToast = (event) =>{
    event.currentTarget.disabled = true;
    toast('This is my favorite recipe.');
    
  }

  console.log(recipe);
  return (
    <Container>
    
      <Row >
        <Col className="g-4">
          <Card style={{height:"1000px"}}>
            <Card.Img style={{height: '300px'}} variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title className='text-center text-primary mb-3'>{recipe.recipe_name}</Card.Title>
              <Card.Text>
                  <h6 className="text-primary">Ingredients</h6>
              {recipe.ingredients.map((r) => (
                <li>{r}</li>
              ))}
            </Card.Text>
            <h6 className="text-primary">Cooking_method</h6>
            <Card.Text>{recipe.cooking_method}</Card.Text>
             
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
          <small className="text-muted">
          <Rating
      style={{ maxWidth: 180 }}
      value={recipe.cooking_method.rating}
      readOnly
    />
          </small>
          <div>
          <button onClick={handleToast}><small><FaBookmark></FaBookmark></small></button>
          <Toaster />
          </div>
        </Card.Footer>
          </Card>
        </Col>     
    </Row>   
    </Container>
  )
};

export default Recipe;
