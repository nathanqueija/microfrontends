import { RouteObject } from 'react-router-dom';
import { ProtectedRoute } from './components/Auth';
import { AppLayout } from './components/Layout';
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

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <MarketingAppLazy /> },
      {
        path: '/auth/*',
        element: <AuthAppLazy />
      },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <DashboardAppLazy />
          </ProtectedRoute>
        )
      },
      { path: '/*', element: <MarketingAppLazy /> }
    ]
  }
];
