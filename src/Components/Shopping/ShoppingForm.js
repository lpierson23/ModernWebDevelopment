import React from "react";

/* STATELESS CHILD COMPONENT */
const ShoppingForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <p>Please fill in this form to add a grocery item to your list.</p>
        <hr />

        <input
          type="text"
          onChange={onChange}
          placeholder="Enter Grocery Item"
          name="item_name"
          id="item_name"
          //value={state.item_name}
          required
        />

        <br />
        <br />

        <select
          name="quantity"
          id="quantity"
          //value={state.quantity}
          onChange={onChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />
        <br />

        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShoppingForm;
