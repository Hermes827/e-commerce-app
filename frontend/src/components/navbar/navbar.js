import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{

 render(){
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={(localStorage.token) ? "/shoppingcart" : "/login"}>
          {(localStorage.token) ? "Shopping Cart" : "Login"}
        </Link></li>
      <li><Link to={(localStorage.token) ? "/signout" : "/signup"}>
        {(localStorage.token) ? "Sign Out" : "Sign Up"}
      </Link></li>
      </ul>
    </div>
  );
};
}

export default withRouter(Navbar);
