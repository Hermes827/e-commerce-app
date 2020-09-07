import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import MyProduct from './myProduct.js'

class MyProducts extends React.Component {

  constructor(){
    super()
    this.state = {
      products: [],
      // checkout: false
    }
  }

  componentDidMount(){
    setTimeout(()=> this.getProductInfo(),1000)
  }

  getProductInfo(){
  this.props.currentUser.products.map(product => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  fetch(`http://localhost:4000/products/find?productID=${product}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    this.setState({
      products: [...this.state.products, result]
    })
  })
  .catch(error => console.log('error', error));
  });
  }

  render(){
  return (
    <div className="myProducts">
        my products
        {(this.props.currentUser.products !== undefined && this.props.currentUser.products.length === this.state.products.length)
          ? this.state.products.map(myProduct => {
          return <MyProduct key={myProduct._id} myProduct={myProduct}/>
        }) : null}
    </div>
  );
}
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps))(MyProducts);
