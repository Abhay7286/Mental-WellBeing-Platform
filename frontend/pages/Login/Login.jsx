import { Link } from 'react-router-dom';
import './Login.css'; 
import UseLogin from '../../hooks/UseLogin';
import { FaSpinner } from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {login,loading} = UseLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Welcome to
          <span className="login-highlight"> TUXCHAT</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input"
              required value={username}
              onChange={(e)=> setUsername(e.target.value) }
            />
          </div>

          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
              required  value={password}
              onChange={(e)=> setPassword(e.target.value) }
            />
          </div>

          <Link to="/signup" className="signup-link">
            Don’t have an account? Sign up
          </Link>

          <div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading?<FaSpinner className='spinner'/>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;