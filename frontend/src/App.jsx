import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import WriteStoryPage from '../pages/WriteStoryPage.jsx';
import ProfilePage from '../pages/ProfiePage.jsx';
import HomePage from '../pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/write-story" element={<WriteStoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
