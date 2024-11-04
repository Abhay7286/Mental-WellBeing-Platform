import React, { useState } from 'react';
import useCreatePost from '../hooks/CreatePostLogic.js';
import './createPostForm.css'

const CreatePostForm = () => {
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const { createPost, loading } = useCreatePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ image, message });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading} className='postbtn'>
          {loading ? "Creating Post..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
