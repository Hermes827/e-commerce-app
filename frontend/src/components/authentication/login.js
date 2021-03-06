import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      password: "",
      username: ""
    }
  }

  captureText = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

onSubmit = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({"username": this.state.username, "password": this.state.password});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/auth/login", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      if(result.token){localStorage.token = result.token}
      this.props.getUserInfo(localStorage.token)
      this.props.history.push('/')
    })
    .catch(error => console.log('error', error));
}

  returnHome = () => {
    this.props.history.push('/')
  }

  render(){
  return (
    <div className="login">
      <Jumbotron className="loginJumbotron">
        <h1 className="loginH1">Log In to Your Account!</h1>
        <div className="loginForm">
        <h1>Login</h1>
        <form>
          <label>Username:</label>
          <input type="text" name="username" placeholder="username" onChange={this.captureText}/><br/>
          <label>Password:</label>
          <input className="loginPasswordInput" type="password" name="password" placeholder="password" onChange={this.captureText}/><br/>
          <Button className="loginButton" variant="primary" onClick={this.onSubmit}>Log in</Button>
          <Button className="loginButton" variant="primary" onClick={this.returnHome}>Cancel</Button>
        </form>
        </div>
      </Jumbotron>
    </div>
  );
}
}

const mapDispatchToProps = {
  getUserInfo
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps))(Login);
