import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
// import { connect } from 'react-redux';
// import { compose } from 'redux'
// import { fetchUserData } from '../../actions/index.js';

class Signout extends React.Component{

  returnToHomePage(){
    delete localStorage.token
    this.props.history.push("/")
  }

  render(){
  return (
    <div>
    {this.returnToHomePage()}
    </div>
  );
}
}

export default withRouter(Signout)
