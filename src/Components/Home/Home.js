import React from "react";
import NavBar from "./NavBar/NavBar.js";
// import HomeList from "./HomeList.js";

const Home = () => {
    return (
      <div>
        <NavBar />
        <div>
          <h1>Welcome to Meal Planner!</h1>
          {/* <!-- this is the home page for the website that gives some info on what users can do on it --> */}
    
          <h3>You can use this website to plan out meals with your roommates!</h3>
          <p>
            Use the links above to add a meal request, add items to your shopping
            list, and view your calendar of meals.
          </p>
          {/* <img src= plates.jpg width="300" height="150" /> */}
        </div>
      </div>
    );
  };
  
  export default Home;
  