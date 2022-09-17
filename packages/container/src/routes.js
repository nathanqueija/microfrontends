import React from 'react';
import { RequireAuth } from './components/Auth';
import { Layout } from './components/Layout';
import lazy from './lazy';

const MarketingAppLazy = lazy(
  () => import('./components/MarketingApp'),
  'MarketingApp'
);
const AuthAppLazy = lazy(() => import('./components/AuthApp'), 'AuthApp');

const DashboardAppLazy = lazy(
  () => import('./components/DashboardApp'),
  'DashboardApp'
);

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
      {
        path: '/dashboard',
        element: (
          <RequireAuth>
            <DashboardAppLazy />
          </RequireAuth>
        )
      },
      { path: '/*', element: <MarketingAppLazy /> }
    ]
  }
];
