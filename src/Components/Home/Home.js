import React from "react";
import NavBar from "../NavBar/NavBar.js";
import AuthModule from "../Auth/Auth.js";

const Home = () => {
    return (
      <div>
        <NavBar />
        <h1>Welcome to Meal Planner!</h1>
        {/* <!-- this is the home page for the website that gives some info on what users can do on it --> */}
  
        <h3>Use this website to plan out meals with your roommates!</h3>
        <p>
          Click the above links to view your meal schedule, place a meal request, and add items to a grocery list.
        </p>
        {/* <img src= plates.jpg width="300" height="150" /> */}

      </div>
    );
  };
  
  export default Home;
  