import React, { useEffect, useState }from "react";
import { getAllMeals } from "../../Common/Services/LearnServices.js";
import { Link } from "react-router-dom";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    // todo: update to tie to a specific user
    useEffect(() => {
        getAllMeals().then((results) => {
          console.log("recipes: ", results);
          setRecipes(results);
        });
    }, []);

    return (
        <div className="recipe-sidebar">
            {recipes.length > 0 && (
            <ul className="recipe-sidebar-list">
                <li className="recipe-sidebar-title">Recipes</li>
                {recipes.map((recipe) => (
                <li key={recipe.id} className="recipe-sidebar-item">
                    <Link to={"/recipebook/" + recipe.id} className="recipe-sidebar-link">{recipe.get("mealName")}</Link>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default RecipeList;