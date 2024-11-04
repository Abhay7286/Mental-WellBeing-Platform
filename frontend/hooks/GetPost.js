import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import GetId from '../zustand/GetId';

const GetPost = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null); 
  const {loggedInUserId} = GetId();

  useEffect(() => {
    const getPost = async () => {
    if (!loggedInUserId?._id) return; 
      setLoading(true);
      try {
        const res = await fetch(`/api/post/${loggedInUserId}`); 
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setPost(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (postId) { 
      getPost();
    }

    return () => {

    };
  }, [postId]); 

  return { loading, post };
};

export default GetPost;
