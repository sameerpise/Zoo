import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);

  console.log("User in Redux:", user); // Debugging: Ensure user is present

  return user && user.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
