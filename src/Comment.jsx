import React, { useState } from "react";
import Form from "./Form";

import "./Comment.css";
const Comment = () => {
  const [comment, setComment] = useState([]);
  const addNewComment = (comment) => {
    setComment((currComments) => [...currComments, comment]);
  };
  return (
    <>
      <h2>All Comments</h2>
      <div className="mainContainer">
        {comment?.map((comment) => (
          <div className="container" key={comment.id}>
            <span>{comment.username}</span>
            <br />
            <p>{comment.comment}</p>
            <span>{comment.rating}</span>
          </div>
        ))}
      </div>
      <Form addNewComment={addNewComment} />
    </>
  );
};

export default Comment;
