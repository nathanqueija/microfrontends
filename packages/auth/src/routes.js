import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';

export const routes = [
  {
    path: '/auth/signin',
    element: <Signin />
  },
  { path: '/auth/signup', element: <Signup /> }
];
