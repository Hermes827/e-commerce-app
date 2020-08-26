import { Link } from 'react-router-dom';
import '../../App.css';
// import Login from '../authentication/login.js';
// import Signup from '../authentication/signup.js';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withRouter } from 'react-router';
import { discardCookie } from '../../actions/index.js';

class Navbar extends React.Component{

  // constructor(){
  //   super()
  //   this.state = {
  //     loggedIn: false
  //   }
  // }

  // loggedIn(){
  //   if(localStorage.token){
  //     this.setState({
  //       loggedIn: true
  //     })
  //   }
  // }

  // componentDidUpdate(){
  //   console.log(localStorage.token)
  //   this.loggedIn()
  // }

  delete(){
    delete localStorage.token
  }

  random(){
    console.log("hello")

  }

 render(){
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={(this.props.cookie) ? "/shoppingcart" : "/login"}>
          {(this.props.cookie) ? "Shopping Cart" : "Log In"}
        </Link></li>
      <li onClick={this.props.discardCookie}><Link to={(this.props.cookie) ? "/" : "/signup"}>
          {(this.props.cookie) ? "Sign Out" : "Sign Up"}
        </Link></li>
      </ul>
      <hr/>
      <button onClick={this.delete}>delete token</button>
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
