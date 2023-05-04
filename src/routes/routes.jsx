/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blog from '../pages/Blog/Blog';
import Chefs from '../pages/Home/Chefs/Chefs';
import FoodItems from '../pages/Home/FoodItems/FoodItems';
import Home from '../pages/Home/Home/Home';
import Recipes from '../pages/Home/Recipes/Recipes';
import Login from '../pages/Login/Login/Login';
import Registration from '../pages/Login/Registration/Registration';

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
      path:'/items',
      element:<FoodItems></FoodItems>,
     
    },
    {
       path:'/blog',
       element:<Blog></Blog>
    },
    {
      path:'/chefs',
      element:<Chefs></Chefs>
    },
    {
      path:"/chefs/:id",
      element:<Recipes></Recipes>,
      loader:({params})=>fetch(`http://localhost:3000/details/${params.id}`)
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Registration></Registration>
    }
  ]
}
])

export default router;