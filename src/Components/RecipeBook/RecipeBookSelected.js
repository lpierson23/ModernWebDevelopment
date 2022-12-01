import React from "react";
import NavBar from "../NavBar/NavBar.js";
import RecipeList from "./RecipeList.js";
import RecipeView from "./RecipeView.js";
import { useParams } from "react-router-dom";

const RecipeBookSelected = () => {
    var params = useParams();
    var mealId = params.mealId;

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