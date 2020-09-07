import React from 'react';

class MyProduct extends React.Component {

  render(){
  return (
    <div className="myProduct">
    {console.log(this.props.myProduct)}
    <div>{this.props.myProduct.name}</div>
    <img className="myProductImage" src={this.props.myProduct.image}/>
    </div>
  );
}
}

export default MyProduct
