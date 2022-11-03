import React from "react";
import RequestsList from "./RequestsList.js";
import NavBar from "./NavBar/NavBar.js";

const Requests = () => {
    return (
      <div>
        <NavBar />
        <h1>Make a Meal Request</h1>
        {<RequestsList /> }
      </div>
    );
  };
  
  export default Requests;
  