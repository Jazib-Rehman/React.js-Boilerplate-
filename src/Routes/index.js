import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./publicRoute";
import Comp404 from "../components/404";
import Login from "../pages/Login";
// import Dashboard from "../components/Dashboard"; // Assuming you have a Dashboard component

const AppRoutes = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Comp404 />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/*" element={<Comp404 />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default AppRoutes;
