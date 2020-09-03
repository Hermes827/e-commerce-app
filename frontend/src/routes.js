import React from 'react';
import AppNavbar from './components/appNavbar/appNavbar.js';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import Login from './components/authentication/login.js';
import Signup from './components/authentication/signup.js';
import ShoppingCart from './components/shoppingCart/shoppingCart.js'
import Signout from './components/authentication/signout.js';
import UploadProduct from './components/uploadProduct/uploadProduct.js';
import MyProfile from './components/profile/myProfile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const Routes = () => {
  return (
    <div>
      <AppNavbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/shoppingcart" component={ShoppingCart}/>
        <Route exact path="/signout" component={Signout}/>
        <Route exact path="/upload-product" component={UploadProduct}/>
        <Route exact path="/my-profile" component={MyProfile}/>
      </Switch>
    </div>
  );
}
