import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Navigate } from 'react-router';

function ProtectedRoute({ children }: any) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  if (!isAuthenticated) {
    return <Navigate to={'/login'} />;
  }

  return children;
}

export default ProtectedRoute;
