import { Navigate } from 'react-router-dom';

import { useAuth } from '../../auth/hooks';

export default function ProtectedRoute({ children, needSignIn, redirect }) {
  const [{ isSignIn }] = useAuth();
  const isAccessible = needSignIn ? isSignIn : !isSignIn;

  return isAccessible ? children : <Navigate to={redirect} replace />;
}
