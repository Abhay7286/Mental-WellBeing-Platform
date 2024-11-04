import React from 'react';
import './WriteStoryPage.css';

const WriteStoryPage = () => {
  return (
    <div className="write-story">
      <h1>Write a New Story</h1>
      <p>Here, every word is welcomed without judgment...</p>
      <div className="story-container">
        <div className="banner-customization">Banner customization options</div>
        <div className="text-banner">Customizable Text Banner</div>
        <div className="text-writing-space">Text writing space</div>
        <div className="keywords">
          <p>Detected Keywords:</p>
          <ul>
            <li>Loneliness</li>
            <li>Burn-out</li>
            <li>Insomnia</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
      <div className="actions">
        <button>Save as Draft</button>
        <button>Publish</button>
      </div>
    </div>
  );
};

export default WriteStoryPage;
