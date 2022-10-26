import React from "react";
import RequestsList from "./RequestsList.js";

const Requests = () => {
    return (
      <div>
        <h1>Make a Meal Request</h1>
        {<RequestsList /> }
      </div>
    );
  };
  
  export default Requests;
  