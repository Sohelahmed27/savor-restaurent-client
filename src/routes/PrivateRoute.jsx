/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      
    </div>
  );
};

export default PrivateRoute;