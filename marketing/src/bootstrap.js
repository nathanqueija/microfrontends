import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

export const mount = (container) => {
  const root = createRoot(container);
  root.render(<App tab="home" />);
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('__marketing__root__container__');

  if (container) mount(container);
}
