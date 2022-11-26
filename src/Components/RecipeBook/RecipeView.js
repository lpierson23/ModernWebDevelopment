import React, { useState, useEffect } from "react";
import { getMealById } from "./../../Common/Services/LearnServices.js";
import Comments from "./Comments.js";
import CommentsForm from "./CommentsForm.js";

const RecipeView = ({ mealId }) => {
    const [meal, setMeal] = useState({});

    useEffect(() => {
        if (mealId) {
            getMealById(mealId).then((object) => {
            console.log("object: ", object.attributes);
            setMeal(object);
            });
        }
    }, []);

    return (
        <div className="recipe">
            {!meal.attributes && (
                <div> Please select a meal </div>
            )}
            {meal.attributes && (
                <div>
                    <h2 className="recipe-heading"> {meal.attributes.mealName} </h2>
                    <p className="recipe-text"> Servings: {meal.attributes.servings} </p>
                    <Comments mealId={mealId} />
                    {meal.attributes.url && (<iframe src={meal.attributes.url} width="100%" height="400px" title="Recipe"></iframe>)}
                    {!meal.attributes.url && (<p className="recipe-text">No recipe given</p>)}
                    <CommentsForm mealId={mealId} />
                </div>
            )}
        </div>
    );
};

export default RecipeView;