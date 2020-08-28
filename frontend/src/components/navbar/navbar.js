import { Link } from 'react-router-dom';
import '../../App.css';
// import Login from '../authentication/login.js';
// import Signup from '../authentication/signup.js';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withRouter } from 'react-router';
import { discardCookie } from '../../actions/index.js';
// import { getCookie } from '../../actions/index.js';

class Navbar extends React.Component{

  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }

  loggedIn(){
    if(localStorage.token){
      this.setState({
        loggedIn: true
      })
    } else {
      this.setState({
        loggedIn: false
      })
    }
  }

  // componentDidMount(){
  //   console.log("component did mount")
  //   this.loggedIn()
  // }

  componentDidUpdate(prevProps, prevState){
    if(this.state.loggedIn === prevState.loggedIn){
      this.setState({
        loggedIn: true
      })
    }
  }

  delete = () => {
    console.log("deleting")
    delete localStorage.token
    this.loggedIn()
  }

 render(){
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={(this.state.loggedIn) ? "/shoppingcart" : "/login"}>
          {(this.state.loggedIn) ? "Shopping Cart" : "Log In"}
        </Link></li>
      <li onClick={this.props.discardCookie}><Link to={(this.state.loggedIn) ? "/login" : "/signup"}>
          {(this.state.loggedIn) ? "Sign Out" : "Sign Up"}
        </Link></li>
      </ul>
      <hr/>
      <button onClick={this.delete}>delete token</button>
      {console.log(this.state.loggedIn)}
      {console.log(localStorage.token)}
    </div>
  );
};
}

const mapDispatchToProps = {
  discardCookie
};

const mapStateToProps = (state) => ({
  cookie: state.cookie
})

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps))(Navbar);
