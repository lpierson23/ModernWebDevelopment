import React from "react";
import PinterestList from "./PinterestList.js";
import NavBar from "../NavBar/NavBar.js";

const Pinterest = () => {
    return (
      <div>
        <NavBar />
        <h1>Link your Pinterest account to load recipes into your recipe book!</h1>
        <PinterestList />
      </div>
    );
  };
  
  export default Pinterest;
  