import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
 
  if (!checkUser()) {
    return <Navigate to='/auth' replace />;
  } else {
    return <Component />;
  }
};

export default ProtectedRoute;
