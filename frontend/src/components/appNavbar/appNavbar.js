import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'

class AppNavbar extends React.Component{

  constructor(){
    super()
    this.state = {

    }
  }

  renderUploadProductLi(){
    if(localStorage.token){
      return <li className="navbarLi"><Link to="/upload-product">Upload Product to MarketPlace</Link></li>
    }
  }

  renderLoggedInStatus(){
    if(localStorage.token){
      return <li className="navbarLoggedInStatus">Logged in as: Anon</li>
    }
  }

 render(){
  return (
    <div className="navbarDiv">
      <ul className={(localStorage.token) ? "navbarUlLoggedin" : "navbarUl"}>
        {this.renderLoggedInStatus()}
        <li className="navbarLi"><Link to="/">Home</Link></li>
        {this.renderUploadProductLi()}
        <li className="navbarLi"><Link to={(localStorage.token) ? "/shoppingcart" : "/login"}>
          {(localStorage.token) ? "Shopping Cart" : "Log In"}
        </Link></li>
      <li className="navbarLi"><Link to={(localStorage.token) ? "/signout" : "/signup"}>
        {(localStorage.token) ? "Sign Out" : "Sign Up"}
      </Link></li>
      </ul>
    </div>
  );
};
}

export default withRouter(AppNavbar);
