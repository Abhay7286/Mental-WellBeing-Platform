import User from "../models/user.model.js";

export const getLoggedInUserDetails = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const user = await User.findById(loggedInUserId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error in getLoggedInUserDetails controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
