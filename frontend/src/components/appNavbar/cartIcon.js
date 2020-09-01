import React from 'react';
import { Cart4 } from 'react-bootstrap-icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'

class CartIcon extends React.Component {

  render(){
  return (
    <div className="cartDivContainer">
    {(this.props.currentUser.shoppingCart === undefined || this.props.currentUser.shoppingCart.length === 0) ? <Cart4 className="emptyShoppingCart" size={40}/>
  : <div className="shoppingCartDiv"><div className="shoppingCartCounter">{this.props.currentUser.shoppingCart.length}</div><Cart4 className="shoppingCart" size={40}/></div>}
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
  connect(mapStateToProps, mapDispatchToProps))(CartIcon);
