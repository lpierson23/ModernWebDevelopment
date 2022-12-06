import React from "react";

/* STATELESS CHILD COMPONENT */
const PinterestAccountForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <p>Please enter your Pinterest username to link Meal Planner to your account.</p>
        <p>If your accounts are already linked, an error may occur.</p>
        {/* Gets users username and board on Pinterest */}
        <hr />
        <div>
          <label htmlFor="pinterestUsername">
            <b>Username </b>
          </label>
          <input
            type="text"
            onChange={onChange}
            placeholder="Enter Pinterest Username"
            name="pinterestUsername"
            id="pinterestUsername"
            required
          />

          <br />
          <br />

          <label htmlFor="boardName">
            <b>Food Board Name </b>
          </label>
          <input
            type="text"
            onChange={onChange}
            placeholder="Enter Board Name"
            name="boardName"
            id="boardName"
            required
          />

          <br />
          <br />

          <button className="button" type="submit" onClick={onClick}>Link Pinterest Account</button>
        </div>
      </form>
    </div>
  );
};

export default PinterestAccountForm;
