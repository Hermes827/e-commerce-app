import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import Item from './item.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Checkout from '../checkout/checkout.js'

class ShoppingCart extends React.Component {

  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    setTimeout(()=> this.getItemsInfo(),1000)
  }

  getItemsInfo(){
  this.props.currentUser.shoppingCart.map(item => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  fetch(`http://localhost:4000/products/find?productID=${item}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    this.setState({
      items: [...this.state.items, result]
    })
  })
  .catch(error => console.log('error', error));
  });
  }



  render(){
  return (
    <Container className="shoppingCart">
      <Row>
        <Col className="shoppingCartCol1" lg={8}>
          <h1>My Cart</h1>
          {(this.props.currentUser.shoppingCart !== undefined && this.props.currentUser.shoppingCart.length === this.state.items.length)
            ? this.state.items.map(item => {
            return <Item key={item._id} item={item}/>
          }) : null}
        </Col>
        <Col className="shoppingCartCol2" lg={4}>
        <Checkout/>
        </Col>
        {console.log(this.state.items)}
      </Row>
    </Container>
  );
}
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps))(ShoppingCart);
