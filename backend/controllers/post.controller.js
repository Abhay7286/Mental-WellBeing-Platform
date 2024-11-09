import Post from "../models/post.model.js"; 

export const createPost = async (req, res) => {
    try {
        const { message, image } = req.body;

        // Log incoming request details for debugging
        console.log("Incoming request body:", req.body);
        console.log("User data:", req.user);

        if (!req.user || !req.user._id || !req.user.username) {
            return res.status(400).json({ error: "User information is missing in the request" });
        }

        const senderId = req.user._id;
        const senderDetails = {
            name: req.user.username, 
            profilePicture: req.user.profilePicture 
        };

        const newPost = new Post({
            senderId,
            senderDetails,
            message,
            image,
        });

        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error in createPost controller:", error); 
        return res.status(500).json({ error: "Internal server error" });
    }
};


export const getPost = async (req, res) => {
    try {
        const { id: userId } = req.params;

        const posts = userId
            ? await Post.find({ senderId: userId }).sort({ createdAt: -1 }) 
            : await Post.find().sort({ createdAt: -1 }); 

        res.status(200).json(posts);
    } catch (error) {
        console.log("Error in getPost controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllPosts = async (req, res) => {
    try {
      const { userId } = req.query;
  
      // Log the incoming userId for debugging
      console.log("Received userId in query:", userId);
  
      // Check if userId exists and has the correct format
      if (!userId) {
        return res.status(400).json({ error: "Missing userId in query parameters" });
      }
  
      // Fetch posts while excluding those created by the specified userId
      const posts = await Post.find({ senderId: { $ne: userId } }).sort({ createdAt: -1 });
  
      // Log posts count for further verification
      console.log("Number of posts retrieved:", posts.length);
  
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error in getAllPosts controller:", error.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  