import React from 'react';
import { FiLogOut } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import UseLogout from '../hooks/UseLogout.js';


const Logout = () => {
  const { loading, logout } = UseLogout();

  return (
    <>
      {!loading ? (
        <FiLogOut className="logout-button" onClick={logout} style={{fontSize:"2em",filter:"invert(1)",margin:"auto"}} />
      ) : (
        <FaSpinner className='spinner'/>
      )}
    </>
  );
};

export default Logout;