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