/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <Container>
    
      <Row >
        <Col className="g-4">
          <Card>
            <Card.Img style={{height: '300px'}} variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.recipe_name}</Card.Title>
              <Card.Text>
                  <h6 className="text-primary">Ingredients</h6>
              {recipe.ingredients.map((r) => (
                <li>{r}</li>
              ))}
            </Card.Text>
            <h6 className="text-primary">Cooking_method</h6>
            <Card.Text>{recipe.cooking_method}</Card.Text>
             
            </Card.Body>
          </Card>
        </Col>     
    </Row>   
    </Container>
  )
};

export default Recipe;
