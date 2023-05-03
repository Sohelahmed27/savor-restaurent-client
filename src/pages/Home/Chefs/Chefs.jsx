/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/chefs')
    .then((response => response.json()))
    .then(data=>setChefs(data.chefs))
  },[])
  return (
    <Container>
    <h2 className="text-center my-3 text-primary">Expert Chefs</h2>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    
      {
        chefs.map(cf=><Chef
         key={cf.name}
          cf = {cf}
          ></Chef>)
      }
    </div>
    </Container>
  );
};

export default Chefs;