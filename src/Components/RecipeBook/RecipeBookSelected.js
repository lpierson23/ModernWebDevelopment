import React from "react";
import NavBar from "../NavBar/NavBar.js";
import RecipeList from "./RecipeList.js";
import RecipeView from "./RecipeView.js";
import { useParams } from "react-router-dom";

const RecipeBookSelected = () => {
    const params = useParams();
    const mealId = params.mealId;

    // TODO: update meal id for comments when changes

    return (
        <div>
            <NavBar />
            <h1> Recipe Book</h1>
            <div className="recipe-grid">
                <RecipeList />
                <RecipeView mealId = {mealId} />
            </div>
        </div>
    );
};

export default RecipeBookSelected;