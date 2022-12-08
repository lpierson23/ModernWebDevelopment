import React, { useEffect, useState } from "react";
import { createComment, getAllComments } from "../../Common/Services/LearnServices.js";
import CommentsForm from "./CommentsForm.js";

const Comments = ({ mealId }) => {
    // when form input is stored
    const [newComment, setNewComment] = useState({
        rating: "2.5",
        comment: ""
    });
    // list of comments from database
    const [comments, setComments] = useState([]);
    // indicates when to create a new comment with form data
    const [add, setAdd] = useState(false);

    // gets list of comments for a recipe
    useEffect(() => {
        getAllComments(mealId).then((results) => {
            console.log("comments: ", results);
            setComments(results);
        });
    }, []);

    // creates a new comment
    useEffect(() => {
        if (newComment && add) {
            createComment(newComment, mealId).then((commentCreated) => {
                if (commentCreated) {
                    alert(`comment successfully created!`);
                }
                setAdd(false);
            });
        }
      }, [newComment, add]);

    // handles form submission
    const onClickHandler = (e) => {
        e.preventDefault();
        // Trigger add flag to create comment and re-render list with new comment
        setAdd(true);
        // clear the form
        window.location.reload(false);
    };

    // handles any input change on form
    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        console.log(newValue);
    
        setNewComment({
            ...newComment,
            [name]: newValue
        });
        console.log("onChange:", newValue);
    };

    // compute the average recipe rating based on comments
    const averageRating = (comments) => {
        var total = 0;
        var count = 0;
        comments.forEach(comment => {
            let rating = parseFloat(comment.get("rating"))
            if (rating != 0.0) {
                total += rating;
                count += 1;
            }
        });
        return total / count;
    }

    return (
        <div>
            <hr />
            <h3 className="recipe-heading"> Recipe Comments </h3>
            <div className="comments-text">
                {comments.length > 0 && (
                    <div className="comments-text">
                        Average Recipe Rating: {averageRating(comments)}
                        <br />
                        <br />
                        Comments:
                        <ul className="comments-list">
                            {comments.map((comment) => (
                                <li key={comment.id}>
                                    {comment.get("comment")} 
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {comments.length == 0 && (
                    <p> No comments provided </p>
                )}
            </div>

            <CommentsForm
                onClick={onClickHandler}
                onChange={onChangeHandler}
                mealId={mealId}
            />
        </div>
    );
  };
  
  export default Comments;