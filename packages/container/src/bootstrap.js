import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { App } from './App';

const mount = (container) => {
  const root = createRoot(container);
  const router = createBrowserRouter(routes);
  root.render(<App router={router} />);
};

const container = document.getElementById('root');

if (container) mount(container);
