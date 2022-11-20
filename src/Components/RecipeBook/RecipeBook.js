import React from "react";
import NavBar from "../NavBar/NavBar.js";
import RecipeList from "./RecipeList.js";
import RecipeView from "./RecipeView.js";

const RecipeBook = () => {
    return (
        <div>
            <NavBar />
            <h1> Recipe Book</h1>
            <div className="recipe-grid">
                <RecipeList />
                <RecipeView />
            </div>
        </div>
    );
};

export default RecipeBook;

// todo: menu column that displays all user recipes
// todo: when click on item in the menu side panel will open displaying recipe name, servings, rating, comments, and mini window of recipe
// todo: attempt seperate scrolling for title and menu vs recipe
// todo: under recipe, display form to add rating and comments