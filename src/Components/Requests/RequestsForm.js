import React from "react";

/* STATELESS CHILD COMPONENT */
const RequestsForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <p>Please fill in this form to add a meal to the request list.</p>
        <hr />
        <div>
          <label htmlFor="mealName">
            <b>Meal name</b>
          </label>
          <input
            type="text"
            onChange={onChange}
            //value={meal.mealName}
            placeholder="Enter Meal Name"
            name="mealName"
            id="mealName"
            required
          />

          <br />
          <br />

          <label htmlFor="servings">
            <b>Servings</b>
          </label>
          <input
            type="text"
            onChange={onChange}
            //value={meal.servings}
            placeholder="Enter Servings"
            name="servings"
            id="servings"
            required
          />

          <br />
          <br />

          <label htmlFor="recipe">
            <b>Recipe</b>
          </label>
          <input
            type="file"
            onChange={onChange}
            //value={meal.recipe}
            placeholder="Upload File"
            name="recipe"
            id="recipe"
          />

          <button type="submit" onClick={onClick}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequestsForm;
