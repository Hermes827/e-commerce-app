import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.js';
import userNavbar from './components/userNavbar/userNavbar.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import Login from './components/authentication/login.js';
import Signup from './components/authentication/signup.js';
import ShoppingCart from './components/shoppingCart/shoppingCart.js'
import Signout from './components/authentication/signout.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Routes = () => {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/shoppingcart" component={ShoppingCart}/>
        <Route exact path="/signout" component={Signout}/>
      </Switch>
    </div>
  );
}

// <div>
// <p>You clicked {count} times</p>
// <button onClick={() => setCount(count + 1)}>
//  Click me
// </button>
// </div>
