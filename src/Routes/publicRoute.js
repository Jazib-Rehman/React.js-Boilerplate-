import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PublicRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={user ? <Navigate to="/dashboard" replace /> : children}
    />
  );
};

export default PublicRoute;
