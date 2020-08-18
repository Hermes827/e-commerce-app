import React from 'react';
import Navbar from './components/navbar/navbar.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';

export const Routes = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
