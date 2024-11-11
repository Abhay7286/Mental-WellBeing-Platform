import { useState } from "react";
import toast from "react-hot-toast";

const createComment = () => {
  const [loading, setloading] = useState(false);

  const submitComment = async (comment, postId) => {
    setloading(true);
    try {
      const res = await fetch(`/api/reaction/createcomment/${postId}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ comment, postId }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return {loading,submitComment};
};

export default createComment;
