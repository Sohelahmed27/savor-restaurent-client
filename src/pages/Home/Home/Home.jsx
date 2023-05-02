/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div fluid
       style={{
        backgroundImage: `url('https://i.pinimg.com/564x/a7/6b/c8/a76bc81a4de744ab0fbc73e980547131.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        height:'500px',
        
        
      }}
      className="d-flex align-items-center">
      <Container className="text-center" >
        <div>
        <h1>Welcome to our Restaurant</h1>
        <p>Discover our delicious menu and enjoy a memorable dining experience.</p>
        </div>
      </Container>
   
    </div>
  );
};

export default Home;