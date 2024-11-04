import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true,
    },
    image: {
        type: String, 
        required: false, 
    },
}, {
    timestamps: true,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
