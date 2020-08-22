import React from 'react';
import Product from './product'

class Marketplace extends React.Component {

    constructor(){
      super()
      this.state = {
        products: []
      }
    }

    componentDidMount(){
      this.getProducts()
    }

  getProducts(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:4000/products/", requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        products: result
      })
    })
    .catch(error => console.log('error', error));
  }

  render(){
  return (
    <div>
    {this.state.products.map(product => {
      return <Product product={product} key={product._id}/>
    })}
    </div>
  );
}
}

export default Marketplace
