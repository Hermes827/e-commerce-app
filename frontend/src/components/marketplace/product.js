import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'

class Product extends React.Component {

  constructor(){
    super()
    this.state = {
      refresh: ""
    }
  }

  addProductToCart = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"userID": this.props.currentUser._id,"productID": this.props.product._id});
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:4000/users/add-to-cart", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    // this.props.getUserInfo()
    }

  render(){
  return (
    <div className="product">
    <img className="productImage" src={this.props.product.image} alt="herb"/>
    <h1>{this.props.product.name}</h1>
    <h3>{this.props.product.description}</h3>
    <h3>{this.props.product.price}</h3>
    <button onClick={this.addProductToCart}>add to cart</button>
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
  connect(mapStateToProps, mapDispatchToProps))(Product);
