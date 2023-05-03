/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';

const FoodItems = () => {
  const [foods, setFoods] =useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/items')
    .then (res => res.json())
    .then(data => setFoods(data.foods))
  },[])
  return (
   <Container>
   <h2 className="text-center text-primary mt-4">Most Popular Food Items</h2>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {
        foods.map(food =><FoodItem
        key={food.id}
        food={food}></FoodItem>)
      }
    </div>
   </Container>
  );
};

export default FoodItems;