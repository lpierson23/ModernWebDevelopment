import React, { useState, useCallback }from "react";

const CommentsForm = ({ onClick, onChange }) => {
    // forces reload on submission so comments appear
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    return (
        <div className="comments-form">
            <form onSubmit={forceUpdate}>
                <hr />
                <h3 className="recipe-heading">Provide a Rating or Leave a New Comment</h3>
                <br />
                
                <div className="comments-form">
                    <label htmlFor="rating" className="comments-form-text">
                        Rating
                        <br />
                        <b className="rating">0</b>
                        <input
                            min="0"
                            max="5"
                            step="0.5"
                            type="range"
                            onChange={onChange}
                            name="rating"
                            id="rating"
                        />
                        <b className="rating">5</b>
                    </label>

                    <br />
                    <br />

                    <label htmlFor="comment" className="comments-form-text"> Comments </label>
                    <br />
                    <textarea id="comment" name="comment" rows="4" cols="50" className="comments-form-text" onChange={onChange} />

                    <br />
                    <br />

                    <button type="submit" onClick={onClick}>Submit</button>
                </div>
            </form>
        </div>
    );
  };
  
  export default CommentsForm;