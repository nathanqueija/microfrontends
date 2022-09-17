import React from 'react';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export const routes = [
  {
    path: '/',
    element: <Landing />
  },
  { path: '/pricing', element: <Pricing /> }
];
