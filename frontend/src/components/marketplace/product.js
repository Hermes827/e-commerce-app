import React from 'react';

class Product extends React.Component {

  render(){
  return (
    <div className="product">
    {console.log(this.props)}
    <img className="productImage" src={this.props.product.image}/>
    <h1>{this.props.product.name}</h1>
    <h3>{this.props.product.description}</h3>
    <h3>{this.props.product.price}</h3>
    <button>buy</button>
    </div>
  );
}
}

export default Product
