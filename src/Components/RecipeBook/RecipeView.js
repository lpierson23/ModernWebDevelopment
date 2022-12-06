import React, { useState, useEffect } from "react";
import { getMealById } from "./../../Common/Services/LearnServices.js";
import Comments from "./Comments.js";

const RecipeView = ({ mealId }) => {
    const [meal, setMeal] = useState({});

    // gets a specific meal from database to display details
    useEffect(() => {
        if (mealId) {
            getMealById(mealId).then((object) => {
                const image = object.get("image");
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
                    {/* TODO: fix errors with iframe */}
                    {/* {meal.attributes.url && (<iframe src={meal.attributes.url} width="50%" height="400px" title="Recipe"></iframe>)} */}
                    {meal.attributes.url && (<p className="recipe-text">Recipe: <a href={meal.get("url")} target="_blank" rel="noopener noreferrer">link</a></p>)}
                    {!meal.attributes.url && (<p className="recipe-text">No recipe given</p>)}
                    {meal.attributes.image && (<img src={meal.get("image")._url} alt="Recipe" width="50%" />)}
                    <br />
                    <br />
                    <Comments mealId={mealId} />
                </div>
            )}
        </div>
    );
};

export default RecipeView;