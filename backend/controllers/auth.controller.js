import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) =>{
    try {
        const {fullname,username,email,password,confirmpassword,gender} = req.body;

        if(password!==confirmpassword){
            return res.status(400).json({error:"passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"username already exists"})
        }
        
        const BoyProfilePic = `https://avatar.iran.liara.run/public/boy/?username=${username}`
        const GirlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=${username}`

        // HASH PASSWORD 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt) 

        const newUser = new User({
            fullname,
            username,
            email,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? BoyProfilePic : GirlProfilePic
        })

        
        if(newUser){
            await newUser.save();
            generateTokenAndSetCookie(newUser._id,res)

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
        else{
            return res.status(400).json({error:"invalid user not created"})
        }
        
    } catch (error) {
        console.log("error in signup controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
};

export const login = async(req, res) =>{
    try {
        const {username,password} = req.body;

        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid username or password"})
        }

        generateTokenAndSetCookie(user._id,res);
        
        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })
        
    } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
};

export const logout = async(req, res) =>{
    try {
       res.cookie("jwt","",{MaxAge:0})
       res.status(200).json({message:"logged out successfully"})
        
    } catch (error) {
        console.log("error in logout controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
};
