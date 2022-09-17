import React from 'react';
import { Layout } from './components/Layout';
import lazy from './lazy';

const MarketingAppLazy = lazy(
  () => import('./components/MarketingApp'),
  'MarketingApp'
);
const AuthAppLazy = lazy(() => import('./components/AuthApp'), 'AuthApp');

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MarketingAppLazy /> },
      {
        path: '/auth/*',
        element: <AuthAppLazy />
      },
      { path: '/*', element: <MarketingAppLazy /> }
    ]
  }
];
