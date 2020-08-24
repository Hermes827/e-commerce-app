import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Login from '../authentication/login.js';
import Signup from '../authentication/signup.js';

const userNavbar = () => {
  return (
    <div className="userNavbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">cart</Link></li>
        <li><Link to="/signup">settings</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default userNavbar;
