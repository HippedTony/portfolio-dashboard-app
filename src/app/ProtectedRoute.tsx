import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Navigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}

export default ProtectedRoute;
