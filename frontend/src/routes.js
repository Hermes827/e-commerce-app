import React from 'react';
import Navbar from './components/navbar/navbar.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import Login from './components/authentication/login.js';
import Signup from './components/authentication/signup.js';

export const Routes = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
