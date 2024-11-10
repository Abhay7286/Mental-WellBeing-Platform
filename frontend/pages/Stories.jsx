import React,{useState} from 'react';
import Explore from '../hooks/Explore.js';
import './Stories.css';  
import { AiOutlineLike } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const Stories = () => {
  const { posts, loading } = Explore();
  const [isCommentsVisible, setisCommentsVisible] = useState(false);

  const Toggle = (e) => {
    e.preventDefault();
    if(!isCommentsVisible){
      setisCommentsVisible(true)
    }
  }
  

  if (loading) return <p className="loading-message">Loading posts...</p>;

  if (posts.length === 0) return <p className="no-posts-message">No posts available</p>;

  return (
    <div className="stories-container">
      {posts.map((post) => (
        <div key={post._id} className="story-card">
          <img src={post.image} alt="postimage" />
          <p>{post.message}</p>
          <p>post made by {post.senderDetails.name}</p>
          <div className="reaction">
            <AiOutlineLike/>
            <FcLikePlaceholder/>
            {/* {isCommentsVisible?<Comments/>:<FaComments onClick={Toggle}/>} */}
            <Link to="/discussion"><FaComments/></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
