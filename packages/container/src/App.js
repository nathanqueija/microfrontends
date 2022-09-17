import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { MarketingApp } from './components/MarketingApp';

// Here instead of importing a react component and using it here
// we call the mount function because the idea behind micro FEs
// is to have close to zero dependencies between remotes
// here it happens that the container is a react app
// but if it were another app them using a react component would not work

const generateClassName = createGenerateClassName({ productionPrefix: 'ct' });

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};
