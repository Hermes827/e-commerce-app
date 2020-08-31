import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class AppNavbar extends React.Component{

  renderUploadProductLink(){
    if(localStorage.token){
      return <Nav.Link className="navbarUploadLink" href="/upload-product">Upload Product to MarketPlace</Nav.Link>
    }
  }

  renderLoggedInStatus(){
    if(localStorage.token){
      return <Navbar.Text className="navbarText"><div className="navbarLoggedInStatus">Logged in as: {this.props.currentUser.name}</div></Navbar.Text>
    } else {
      return <h1 className="navbarH1">Herb Bazaar</h1>
    }
  }

 render(){
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
      {this.renderLoggedInStatus()}
      {this.renderUploadProductLink()}
      </Container>
      <Container>
       <div className="navbarLink"></div>
       <Nav.Link className="navbarLink" href="/">Home</Nav.Link>
       <Nav.Link className="navbarLink" href={(localStorage.token) ? "/shoppingcart" : "/login"}>
         {(localStorage.token) ? "Shopping Cart" : "Login"}
       </Nav.Link>
       <Nav.Link className="navbarLink" href={(localStorage.token) ? "/signout" : "/signup"}>
         {(localStorage.token) ? "Sign Out" : "Sign Up"}
       </Nav.Link>
       </Container>
       {console.log(this.props.currentUser)}
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
