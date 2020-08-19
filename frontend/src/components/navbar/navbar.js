import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Login from '../authentication/login.js';
import Signup from '../authentication/signup.js';

const navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default navbar;
