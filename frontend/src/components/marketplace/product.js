import React from 'react';

class Product extends React.Component {

  render(){
  return (
    <div className="product">
    <img className="productImage" src={this.props.product.image} alt="herb"/>
    <h1>{this.props.product.name}</h1>
    <h3>{this.props.product.description}</h3>
    <h3>{this.props.product.price}</h3>
    <button>add to cart</button>
    </div>
  );
}
}

export default Product
