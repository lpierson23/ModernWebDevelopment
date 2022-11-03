import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthServices";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Link to="/auth/register">
        <button>Register as a New User</button>
      </Link>
      <br />
      <br />
      <Link to="/auth/login">
        <button>Login to an Account</button>
      </Link>
    </div>
  );
};

export default AuthModule;
