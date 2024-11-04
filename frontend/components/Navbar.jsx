import React from "react";
import { Link } from "react-router-dom";
import Logout from "../pages/Logout.jsx";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2B4A68" }}>
      <div className="container">

        <Link className="navbar-brand text-white" to="#">
          CalmCircle
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/"> 
                Who we are
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link"> 
                <button className="btn" style={{ backgroundColor: "skyblue", color: "white" }}>
                  Log-in
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stories" className="nav-link"> 
                <button className="btn" style={{ backgroundColor: "skyblue", color: "white" }}>
                  Stories
                </button>
              </Link>
            </li>
            <Logout/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
