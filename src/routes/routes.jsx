/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Chefs from '../pages/Home/Chefs/Chefs';
import Home from '../pages/Home/Home/Home';
import Recipes from '../pages/Home/Recipes/Recipes';

const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children: [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/chefs',
      element:<Chefs></Chefs>
    },
    {
      path:"/chefs/:id",
      element:<Recipes></Recipes>,
      loader:({params})=>fetch(`http://localhost:3000/details/${params.id}`)
    }
  ]
}
])

export default router;