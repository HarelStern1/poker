import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ redirectPath = "/sign-up", children }) => {
  const { loading, authenticated, user } = useAuth();

  if (loading) {
    return null;
  }

  if (!authenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return React.cloneElement(children, { user });
};

export default ProtectedRoute;
