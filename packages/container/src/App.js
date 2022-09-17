import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

// Here instead of importing a react component and using it here
// we call the mount function because the idea behind micro FEs
// is to have close to zero dependencies between remotes
// here it happens that the container is a react app
// but if it were another app them using a react component would not work

const generateClassName = createGenerateClassName({ productionPrefix: 'ct' });

export const App = ({ router }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  );
};
