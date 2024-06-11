import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
