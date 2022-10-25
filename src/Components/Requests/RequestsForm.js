import React from "react";

/* STATELESS CHILD COMPONENT */
const RequestsForm = ({ meal, onChange, onClick }) => {
  return (
    <div>
      <form>
        <p>Please fill in this form to add a meal to the request list.</p>
        <hr />
        <div>
          <label for="name">
            <b>Meal name</b>
          </label>
          <input
            type="text"
            onChange={onChange}
            value={meal.mealName}
            placeholder="Enter Meal Name"
            name="name"
            id="name"
            required
          />

          <br />
          <br />

          <label for="serv">
            <b>Servings</b>
          </label>
          <input
            type="text"
            onChange={onChange}
            value={meal.servings}
            placeholder="Enter Servings"
            name="serv"
            id="serv"
            required
          />

          <br />
          <br />

          <label for="recipe">
            <b>Recipe</b>
          </label>
          <input
            type="file"
            onChange={onChange}
            value={meal.recipe}
            placeholder="Upload File"
            name="recipe-file"
            id="recipe"
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequestsForm;
