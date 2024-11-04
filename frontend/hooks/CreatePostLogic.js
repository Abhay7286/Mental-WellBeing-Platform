import {useState} from 'react'
import toast from 'react-hot-toast'
import {usePostContext } from '../context/PostContext.jsx'

const CreatePost = () => {
  const [loading, setloading] = useState(false)
  const {setPost} = usePostContext()
  const createPost = async ({ image, message}) => {
    const success = handleInputErrors({ image, message});
    if (!success) return;
  
    setloading(true);
  
    try {
      const res = await fetch("/api/post/createpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image,
          message,
        })
      });
  
      const data = await res.json();
      console.log("Server Response:", data);
  
      if (res.status === 400) {
        toast.error(data.error || "Bad Request");
      } 

      toast.success("Created Post Successfully");

      localStorage.setItem("created-post",JSON.stringify(data))
      setPost(data)
  
    } catch (error) {
      toast.error("Failed to connect to server");
      console.log("Error:", error.message);
    } finally {
      setloading(false);
    }
  };
  
  return {loading,createPost};
}

export default CreatePost

const handleInputErrors = ({ image, message }) => {
    if (!image || !message) {
      toast.error("Both image and message are required");
      return false;
    }
    return true;
  };