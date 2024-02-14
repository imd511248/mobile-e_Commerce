import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAuthenticated = {'token': true}; // Replace with your authentication check

  return isAuthenticated ? <Outlet /> : <Navigate to="/loginPage" />;
};

export default PrivateRoutes;
