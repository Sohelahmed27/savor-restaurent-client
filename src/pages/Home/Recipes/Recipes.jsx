/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
// eslint-disable-next-line no-undef


const Recipes = () => {
 const details = useLoaderData();
 console.log(details);
 const {name,id,bio, image,years_of_experience,num_recipes,likes,recipes
 } = details;
  
  return (
    <Container>
      <div>
      <Card className='mx-auto mt-5'>
        <Card.Img className='mx-auto' style={{height:'400px', width:'400px'}} variant="top" src={image} />
        <Card.Body className='text-center'>
        <h3 className='text-primary'>{name}</h3>
          <Card.Text>
            {bio}
          </Card.Text>
        </Card.Body>
      </Card>
      <h3 className='text-center text-primary my-3'>Recipes</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {
          recipes.map(recipe =><Recipe 
          key={recipe.key} recipe={recipe}></Recipe>)
        }
      </div>
    </div>
    </Container>
  );
};

export default Recipes;