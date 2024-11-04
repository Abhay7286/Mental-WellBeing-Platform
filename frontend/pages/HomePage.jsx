import React from 'react';
import './HomePage.css'
import homeimg from '../homeimg.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>CalmCircle<br/>Share. Connect. Heal<br/>Together in CalmCircle</h2>
      <button className="btn" style={{ backgroundColor: "skyblue", color: "white"}}>
                Log-in and tell us your story
      </button>
      

      <div className="home-image">
        <img src={homeimg} alt="homeimg" />
      </div>

      <div className="about">
        <h2>About us</h2>
        <p className="text-center">Welcome to CalmCircle, a space designed to help break the isolation linked to mental health challenges.</p>
        <p className="text-center">We do not focus on any mental illness,as we recognize that every journey is unique. However, one common sympton shared by many mental health struggles is loneliness. This feeling of isolation can deepen the pain, but it can also be eased by something simple: talking.</p>
        <p className='text-center'>At CalmCircle, we belive in the power of words. By offering a secure space for an journal, you can express your thoughts, emotions, and experiences.</p>
        <p className='text-center'>Through keyword analysis, our platform connects you with others who share similar feelings</p>
        <p className='text-center'>Whether you're dealing with anixety, depression, or simply feeling lost, you are not alone. You can engage in conversations and final support in a compassionate environment.</p>
        <p className='text-center'>We're here to help lighten the load of your thoughts and offer community support. Together, we can fight loneliness and take a step toward well-being.</p>
      </div>

    </div>
  );
};

export default HomePage;