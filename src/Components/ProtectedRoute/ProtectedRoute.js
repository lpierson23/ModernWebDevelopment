import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/auth");
  };
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div>
        <h1>Meal Planner</h1>
        <h3>Please return to home page to login</h3>
        <button onClick={goBackHandler}>Go to Home Page</button>
      </div>
    );
  }
};

export default ProtectedRoute;
