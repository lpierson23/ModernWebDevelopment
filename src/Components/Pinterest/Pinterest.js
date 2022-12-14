import React from "react";
import PinterestList from "./PinterestList.js";
import NavBar from "../NavBar/NavBar.js";

const Pinterest = () => {
    return (
      <div>
        <NavBar />
        <h1>Linked Pinterest</h1>
        <p>View recent pins on your Pinterest board and load recipes into your recipe book!</p>
        <PinterestList />
      </div>
    );
  };
  
  export default Pinterest;
  