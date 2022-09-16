import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const mount = (container) => {
  const root = createRoot(container);
  root.render(<App tab="home" />);
};

const container = document.getElementById('root');

if (container) mount(container);
