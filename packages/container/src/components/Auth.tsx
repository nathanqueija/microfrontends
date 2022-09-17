import { useLocation, Navigate } from 'react-router-dom';
import * as Auth from '../app/auth';

interface IProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
  children
}) => {
  let location = useLocation();
  const user = Auth.subscriptions.user();

  if (!user) {
    // Redirect them to the login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  return children;
};
