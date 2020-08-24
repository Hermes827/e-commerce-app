import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.js';
import userNavbar from './components/userNavbar/userNavbar.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import Login from './components/authentication/login.js';
import Signup from './components/authentication/signup.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Routes = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
     <p>You clicked {count} times</p>
     <button onClick={() => setCount(count + 1)}>
       Click me
     </button>
   </div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
