import React from "react";
// import NavBar from "./NavBar/NavBar.js";
import AuthModule from "../Auth/Auth.js";

const Home = () => {
    return (
      <div>
        <h1>Welcome to Meal Planner!</h1>
        {/* <!-- this is the home page for the website that gives some info on what users can do on it --> */}
  
        <h3>You can use this website to plan out meals with your roommates!</h3>
        <p>
          Please log in or register to access links to add a meal request, add items to your shopping
          list, and view your calendar of meals.
        </p>
        {/* <img src= plates.jpg width="300" height="150" /> */}

        <AuthModule/>

      </div>
    );
  };
  
  export default Home;
  