import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import { Router } from '@remix-run/router';

import './App.css';
import 'antd/dist/antd.min.css';

const generateClassName = createGenerateClassName({ productionPrefix: 'dash' });

interface IAppProps {
  router: Router;
}

export const App: React.FC<IAppProps> = ({ router }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  );
};
