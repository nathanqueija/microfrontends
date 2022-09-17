import React from 'react';
import { useContainer } from '../context';
import { useLocation, Navigate } from 'react-router-dom';

export function RequireAuth({ children }) {
  let context = useContainer();
  let location = useLocation();

  if (!context.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  return children;
}
