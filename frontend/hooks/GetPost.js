import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import GetUser from './GetUser.js';

const GetPost = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]); 
  const { profile } = GetUser();

  useEffect(() => {
    const getPost = async () => {
      if (!profile._id) return;
      
      setLoading(true);
      try {
        const res = await fetch(`/api/post/${profile._id}`); 
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setPosts(data);
      } catch (error) {
        toast.error(`Failed to fetch posts: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [profile._id]); 

  return { loading, posts };
};

export default GetPost;
