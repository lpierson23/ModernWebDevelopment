import React from "react";

/* STATELESS CHILD COMPONENT */
const RequestsForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <p>Please fill in this form to add a meal to the request list.</p>
        {/* Gets info from user on meal name, serving size, and optional recipe file */}
        <hr />
        <div>
          <label htmlFor="mealName">
            <b>Meal name</b>
          </label>
          <input
            type="text"
            onChange={onChange}
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
            type="url"
            onChange={onChange}
            placeholder="Enter url"
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
