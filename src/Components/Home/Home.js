import React from "react";
import AuthModule from "../Auth/Auth.js";

const Home = () => {
    return (
      <div>
        <h1>Welcome to Meal Planner!</h1>
        {/* <!-- this is the home page for the website that gives some info on what users can do on it --> */}
  
        <h3>You can use this website to plan out meals with your roommates!</h3>
        <p>
          After logging in or registering as a new user, you have access to add a meal request, add items to your shopping
          list, and view your calendar of meals.
        </p>
        {/* need to fix image display */}
        {/* <img src= plates.jpg width="300" height="150" /> */}
        <AuthModule />
      </div>
    );
  };
  
  export default Home;
  