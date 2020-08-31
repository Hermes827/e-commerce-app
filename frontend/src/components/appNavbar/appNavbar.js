import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class AppNavbar extends React.Component{

  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    if(localStorage.token){this.props.getUserInfo(localStorage.token)}
  }

  renderUploadProductLink(){
    if(localStorage.token){
      return <Nav.Link className="navbarUploadLink" href="/upload-product">Upload Product to MarketPlace</Nav.Link>
    }
  }

  renderLoggedInStatus(){
    if(localStorage.token){
      return <Navbar.Text className="navbarText"><div className="navbarLoggedInStatus">Logged in as: {this.props.currentUser.name}</div></Navbar.Text>
    }
  }

 render(){
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      {this.renderLoggedInStatus()}
      {this.renderUploadProductLink()}

       <Nav.Link className="navbarLink" href="/">Home</Nav.Link>
       <Nav.Link className="navbarLink" href={(localStorage.token) ? "/shoppingcart" : "/login"}>{(localStorage.token) ? "Shopping Cart" : "Login"}</Nav.Link>
       <Nav.Link className="navbarLink" href={(localStorage.token) ? "/signout" : "/signup"}>{(localStorage.token) ? "Sign Out" : "Sign Up"}</Nav.Link>
  
    </Navbar>
  );
};
}

const mapDispatchToProps = {
  getUserInfo
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps))(AppNavbar);
