import React from 'react';
import { Cart4 } from 'react-bootstrap-icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'

class CartIcon extends React.Component {

  cartCounter = () => {
    if(this.props.currentUser.shoppingCart.length > 9){
      return "9+"
    } else {
      return this.props.currentUser.shoppingCart.length
    }
  }

  render(){
  return (
    <>{(this.props.currentUser.shoppingCart === undefined || this.props.currentUser.shoppingCart.length === 0)
        ? <Cart4 size={40}/> : <div><div className="shoppingCartIconCounter">{this.cartCounter()}</div>
        <Cart4 className="shoppingCartIcon" size={40}/></div>}</>
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
