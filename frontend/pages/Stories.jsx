import React from 'react';
import Explore from '../hooks/Explore.js';
import './Stories.css';  // Import the CSS file

const Stories = () => {
  const { posts, loading } = Explore();

  if (loading) return <p className="loading-message">Loading posts...</p>;

  if (posts.length === 0) return <p className="no-posts-message">No posts available</p>;

  return (
    <div className="stories-container">
      {posts.map((post) => (
        <div key={post._id} className="story-card">
          <img src={post.image} alt="postimage" />
          <p>{post.message}</p>
          <p>post made by {post.senderDetails.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
