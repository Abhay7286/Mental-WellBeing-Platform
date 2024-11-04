import {useState} from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const UseSignUp = () => {
  const [loading, setloading] = useState(false)
  const {setAuthUser} = useAuthContext()
  const signUp = async ({ fullName, username,email, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username,email, password, confirmPassword, gender });
    if (!success) return;
  
    setloading(true);
  
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: fullName,// Adjusted to match backend
          username,
          email,
          password,
          confirmpassword: confirmPassword, // Adjusted to match backend
          gender
        })
      });
  
      const data = await res.json();
      console.log("Server Response:", data);
  
      if (res.status === 400) {
        toast.error(data.error || "Bad Request");
      } 

      toast.success("Sign-up successful!");

      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
  
    } catch (error) {
      toast.error("Failed to connect to server");
      console.log("Error:", error.message);
    } finally {
      setloading(false);
    }
  };
  
  return {loading,signUp};
}

export default UseSignUp

function handleInputErrors({ fullName, username,email, password, confirmPassword, gender }) {
  if (!fullName || !username || !email || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    console.log("Error: Missing field(s)");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    console.log("Error: Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    console.log("Error: Password too short");
    return false;
  }
  console.log("Input validation passed");
  return true;
}
