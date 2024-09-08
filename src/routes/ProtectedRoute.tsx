// src/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthorized: boolean;
  element: React.ReactElement;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthorized, element, path }) => {
  if (!isAuthorized) {
    return <Navigate to='/' replace />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
