/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

const Chef = ({cf}) => {
  console.log(cf);
  const {name,id,image,images,years_of_experience,num_recipes,likes}=cf;
  return (
    <div>
      <Row >
        <Col className="g-4">
          <Card>
            <Card.Img style={{height: '300px'}} variant="top" src={image} />
            <Card.Body>
              <Card.Title className="text-primary">{name}</Card.Title>
              <Card.Text>
                <p>Experience:{years_of_experience}</p>
                <p>Number of recipes:{num_recipes}</p>
                <p>Likes:{likes}</p>
              </Card.Text>
              <Link cf={cf} to={{
               pathname: `/chefs/${cf.id}`,
          
             }}className="btn btn-primary">View Details</Link>
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
    </div>
  );
};

export default Chef;