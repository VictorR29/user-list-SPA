import React  from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirecTo}) => {
  const { userToken } = useAuth();

  if(!userToken) {
    return <Navigate to={redirecTo} />
  }

  return children;
}

export { PrivateRoute };