import React, { useState } from 'react';
import './comments.css';
import useCreateComment from '../hooks/CreateComment.js'; 
import { useLocation } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";

const Comments = () => {  
  const location = useLocation();
  const [comment, setComment] = useState("");

  // Access the postId from the location state
  const postId = location.state?.postId;

  console.log("postId:", postId);

  const { loading, submitComment } = useCreateComment();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postId) {
      console.error("postId is undefined, cannot create comment.");
      return;
    }
    await submitComment(comment, postId);
  }

  return (
    <div className="comment-container">
      <div className="comment-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Your Comments</label>
          <textarea
            name="comment"
            id="comment"
            rows="6"
            placeholder='Share your thoughts'
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-btn">
            {loading ? <FaSpinner className="spinner" /> : "Post Comment"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
