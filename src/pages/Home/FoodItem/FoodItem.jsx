/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const FoodItem = ({food}) => {
  console.log(food);
  return (
    <div>
      <Row >
        <Col className="g-4">
          <Card>
            <Card.Img style={{height: '300px'}} variant="top" src={food.picture
} />
            <Card.Body>
              <Card.Title className="text-primary">{food.name}</Card.Title>
              <Card.Text>
                <p>Experience:{food.price}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
    </div>
  );
};

export default FoodItem;