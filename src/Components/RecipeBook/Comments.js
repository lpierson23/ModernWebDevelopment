import React, { useEffect, useState } from "react";
import { createComment, getAllComments } from "../../Common/Services/LearnServices.js";
import CommentsForm from "./CommentsForm.js";

const Comments = ({ mealId }) => {
    const [newComment, setNewComment] = useState({
        rating: 1,
        comment: ""
    });
    const [comments, setComments] = useState([]);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        getAllComments(mealId).then((results) => {
            console.log("comments: ", results);
            setComments(results);
        });
    }, []);

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

    const onClickHandler = (e) => {
        e.preventDefault();
        // Trigger add flag to create comment and re-render list with new comment
        setAdd(true);
        // clear the form
        window.location.reload(false);
    };

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

    const averageRating = (comments) => {
        var total = 0;
        comments.forEach(comment => total+=parseFloat(comment.get("rating")))
        return total / comments.length;
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