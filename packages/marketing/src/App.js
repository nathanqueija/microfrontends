import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </StylesProvider>
  );
};
