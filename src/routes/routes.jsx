/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';

const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children: [
    {

    }
  ]
}
])

export default router;