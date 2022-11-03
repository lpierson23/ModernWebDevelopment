import React from "react";
import ShoppingList from "./ShoppingList.js";
import NavBar from "./NavBar/NavBar.js";

const Shopping = () => {
  return (
    <div>
      <NavBar />
      <h1>Add Items to your Shopping List</h1>
      <ShoppingList />
    </div>
  );
};

export default Shopping;
