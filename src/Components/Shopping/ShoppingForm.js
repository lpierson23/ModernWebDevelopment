import React from "react";

/* STATELESS CHILD COMPONENT */
const ShoppingForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <p>Please fill in this form to add a grocery item to your list.</p>
        {/* gets grocery item name and quantity from user and adds to Groceries database */}
        <hr />

        <label htmlFor="itemName">
          <b>Grocery Item </b>
        </label>
        <input
          type="text"
          onChange={onChange}
          placeholder="Enter Grocery Item"
          name="itemName"
          id="itemName"
          required
        />

        <br />
        <br />

        <label htmlFor="quantity">
          <b>Quantity </b>
        </label>
        <select
          name="quantity"
          id="quantity"
          onChange={onChange}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />
        <br />

        <button className="button" type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShoppingForm;
