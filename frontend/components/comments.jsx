import React from 'react';
import './comments.css';

const comments = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submit logic here
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
          ></textarea>
          <button type="submit" className="submit-btn">Post comment</button>
        </form>
      </div>
    </div>
  );
}

export default comments;
