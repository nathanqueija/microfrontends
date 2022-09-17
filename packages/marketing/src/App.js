import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

export const App = ({ router }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  );
};
