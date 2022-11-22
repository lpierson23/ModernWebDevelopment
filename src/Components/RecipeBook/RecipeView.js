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
        <div>
            {!meal.attributes && (
                <div> Please select a meal </div>
            )}
            {meal.attributes && (
                <div>
                    <h3 className="recipe-heading"> {meal.attributes.mealName} </h3>
                    <p className="recipe-servings"> Servings: {meal.attributes.servings} </p>
                    <Comments mealId={mealId} />
                    <iframe src={meal.attributes.url} width="100%" height="400px" title="Recipe"></iframe>
                    <CommentsForm mealId={mealId} />
                </div>
            )}
        </div>
    );
};

export default RecipeView;