import {useState,useEffect} from 'react';
import toast from 'react-hot-toast';
import GetUser from './GetUser.js';

const Explore = () => {
  const [posts, setPost] = useState([])
  const [loading, setloading] = useState(false)
  const { profile } = GetUser();
//   console.log(profile._id)

  useEffect(() => {
   const getAllPosts = async()=> {
    if (!profile._id) return;
    setloading(true)
     try {
        const res = await fetch(`/api/post/all?userId=${profile._id}`)
        const data = await res.json();
        if(data.error) {
            throw new Error(data.error);
        }
        setPost(data);

     } catch (error) {
        toast.error(`Failed to fetch posts in explore: ${error.message}`);
     }finally{
        setloading(false);
     }
   };

   getAllPosts();
   
  }, [profile._id])
  
  return {loading,posts};
}

export default Explore
