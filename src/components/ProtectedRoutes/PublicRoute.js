import React  from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({redirecTo="/users"}) => {
  const { userToken } = useAuth();

  if(userToken) {
    return <Navigate to={redirecTo} />
  }

  return <Outlet />;
}

export { PublicRoute };