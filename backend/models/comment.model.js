import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    // User who sent the comment
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    senderDetails: {
      name: {
        type: String,
        required: true,
      },
      profilePic: {
        type: String,
      },
    },
    
    // Post to which the comment belongs (could be a story, chapter, or post)
    postDetails: {
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",  
        required: true,
      },
      postMessage: {
        type: String, 
      },
    },

    // The comment content
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
