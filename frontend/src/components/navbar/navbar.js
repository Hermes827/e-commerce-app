import { Link } from 'react-router-dom';
import '../../App.css';
import Login from '../authentication/login.js';
import Signup from '../authentication/signup.js';
import React, { useState } from 'react';

class Navbar extends React.Component{

 render(){
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={(localStorage.token) ? "/shoppingcart" : "/login"}>
          {(localStorage.token) ? "Shopping Cart" : "Log In"}
        </Link></li>
        <li><Link to={(localStorage.token) ? "/signout" : "/signup"}>
          {(localStorage.token) ? "Sign Out" : "Sign Up"}
        </Link></li>
      </ul>
      <hr/>
    </div>
  );
};
}

export default Navbar;
