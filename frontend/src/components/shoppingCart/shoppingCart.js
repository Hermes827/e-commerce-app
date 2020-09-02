import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import Item from './item.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
  this.props.currentUser.products.map(product => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  fetch(`http://localhost:4000/products/find?productID=${product}`, requestOptions)
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
    <Container className="shoppingCart" fluid>
    <Row>
    <h1>My Cart</h1>
    {(this.props.currentUser.products !== undefined && this.props.currentUser.products.length === this.state.items.length)
      ? this.state.items.map(item => {
      return <Item key={item._id} item={item}/>
    }) : null}
    </Row>
    <Row>pay</Row>
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
