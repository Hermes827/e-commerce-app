import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Topics">Topics</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default navbar;
