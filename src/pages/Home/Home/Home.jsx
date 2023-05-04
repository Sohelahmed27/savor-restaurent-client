/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import Chefs from "../Chefs/Chefs";
import FoodItems from "../FoodItems/FoodItems";

const Home = () => {
  return (
    <div>
      <div
        fluid="true"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/a7/6b/c8/a76bc81a4de744ab0fbc73e980547131.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          height: "500px",
        }}
        className="d-flex align-items-center"
      >
        <Container className="text-center">
          <div>
            <h1>Welcome to British Cuisine</h1>
            <p>
              Discover our delicious menu and enjoy a memorable dining
              experience.
            </p>
          </div>
        </Container>
      </div>
      <FoodItems></FoodItems>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
