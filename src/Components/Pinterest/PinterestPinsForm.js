import React from "react";

/* STATELESS CHILD COMPONENT */
const PinterestPinsForm = ({ onLoadClick }) => {
  return (
    <div>
      <form>
        <div>
          {/* loads user pins from their specified board if they have linked accounts */}
          <button className="button" type="submit" onClick={onLoadClick} >Load Most Recent Pins</button>
        </div>
      </form>
    </div>
  );
};

export default PinterestPinsForm;
