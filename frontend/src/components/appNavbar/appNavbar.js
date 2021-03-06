import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SearchBar from './searchBar'
import CartIcon from './cartIcon.js'

class AppNavbar extends React.Component{

  componentDidMount(){
    if(localStorage.token){this.props.getUserInfo(localStorage.token)}
  }

  renderUploadProductLink(){
    if(localStorage.token){
      return <Nav.Link className="navbarUploadLink" href="/upload-product">Upload Product to MarketPlace</Nav.Link>
    } else {
      return <div></div>
    }
  }

  renderLoginLink(){
    if(!localStorage.token){
      return <Nav.Link className="navbarLink" href="/login">Log In</Nav.Link>
    }
  }

  renderAccountDropdownMenu(){
    if(localStorage.token){
      return (
        <NavDropdown className="navbarDropdown" title="Account">
        <NavDropdown.Item href="/my-profile">View Profile</NavDropdown.Item>
        <NavDropdown.Item href="/edit-my-profile">Edit Profile</NavDropdown.Item>
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Item href="/my-products">My Products</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/signout">Sign Out {this.props.currentUser.username}</NavDropdown.Item>
        </NavDropdown>
      )
    }
  }

 render(){
  return (
    <div className="navbarSpacer">
    <Navbar className="navbar" bg="dark" variant="dark" fixed="top">
     <Container fluid>
     <h1 className="navbarH1">Herb Bazaar</h1>
     <SearchBar/>
     {this.renderUploadProductLink()}
     <Nav.Link className="navbarLink" href="/">Home</Nav.Link>
     <Nav.Link className="navbarLink" href={(localStorage.token) ? "/shoppingcart" : "/signup"}>
      {(localStorage.token) ? <CartIcon/> : "Sign Up"}
     </Nav.Link>
     {this.renderLoginLink()}
     {this.renderAccountDropdownMenu()}
     </Container>
    </Navbar>
    </div>
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
