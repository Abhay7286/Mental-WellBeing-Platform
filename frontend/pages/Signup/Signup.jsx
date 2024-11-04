import { Link } from 'react-router-dom';
import './Signup.css'; 
import { useState } from 'react';
import UseSignUp from '../../hooks/UseSignUp';
import { FaSpinner } from "react-icons/fa";

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    gender: ""
  });

  const {loading,signUp} = UseSignUp()

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Inputs before signUp:", inputs);
    await signUp(inputs);
};



  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">
          Create your
          <span className="signup-highlight"> TUXCHAT</span> Account
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Fullname Field */}
          <div className="form-group">
            <label className="label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input"
              required 
              value={inputs.fullName} 
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label className="label">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="input"
              required 
              value={inputs.username} 
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          {/* email Field */}
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input"
              required 
              value={inputs.email} 
              onChange={(e) => setInputs({...inputs, email: e.target.value})}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
              required 
              value={inputs.password} 
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input"
              required 
              value={inputs.confirmPassword} 
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          {/* Gender Selection */}
          <div className="form-group">
            <label className="label">Gender</label>
            <div className="gender-options">
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  required 
                  checked={inputs.gender === "male"} 
                  onChange={(e) => setInputs({...inputs, gender: e.target.value})} 
                /> 
                <p>Male</p>
              </label>
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="female" 
                  required 
                  checked={inputs.gender === "female"} 
                  onChange={(e) => setInputs({...inputs, gender: e.target.value})} 
                /> 
                <p>Female</p>
              </label>
            </div>
          </div>

          {/* Already have an account Link */}
          <Link to="/login" className="login-link">
            Already have an account? Login
          </Link>

          {/* Signup Button */}
          <div>
            <button type="submit" className="signup-button" disabled={loading}>
              {loading?<FaSpinner className="spinner" />:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;