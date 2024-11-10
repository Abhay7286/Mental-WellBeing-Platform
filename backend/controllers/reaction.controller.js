import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const createComment = async (req, res) => {
  try {
    const { comment, postId } = req.body; 

    const senderId = req.user._id;

    const senderDetails = {
      name: req.user.username,
      profilePic: req.user.profilePic, 
    };

    const post = await Post.findById(postId);  
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const postDetails = {
      postId: post._id,
      postMessage: post.message,  
    };

    // Create the new comment
    const newComment = new Comment({
      senderId,
      senderDetails,
      comment,
      postDetails, 
    });

    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error in createComment controller:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
