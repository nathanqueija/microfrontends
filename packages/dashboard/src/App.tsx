import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from '@remix-run/router';
import './App.css';
import 'antd/dist/antd.min.css';

interface IAppProps {
  router: Router;
}

export const App: React.FC<IAppProps> = ({ router }) => {
  return <RouterProvider router={router} />;
};
