import React, { useState } from 'react';
import Explore from '../hooks/Explore.js';
import './Stories.css';
import { AiOutlineLike } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Stories = () => {
  const { posts, loading } = Explore();
  const navigate = useNavigate();

  const handleCommentClick = (postId) => {
    navigate("/discussion", { state: { postId } });
  };


  const postid = (e, postId) => {
    e.preventDefault();
    console.log("the id of the post", postId);
  }



  if (loading) return <p className="loading-message">Loading posts...</p>;

  if (posts.length === 0) return <p className="no-posts-message">No posts available</p>;

  return (
    <div className="stories-container">
      {posts.map((post) => (
        <div key={post._id} className="story-card" onClick={(e) => postid(e, post._id)}>
          <img src={post.image} alt="postimage" />
          <p>{post.message}</p>
          <p>post made by {post.senderDetails.name}</p>
          <div className="reaction">
            <AiOutlineLike />
            <FcLikePlaceholder />
            {console.log("Passing Post ID to Link:", post._id)}
            <Link to="/discussion">
              <FaComments onClick={() => handleCommentClick(post._id)} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
