import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Item extends React.Component {

  render(){
  return (
    <Container className="item">
      <Row>
        <Col className="itemCol1" lg={3}>
        <img className="itemIMG" src={this.props.item.image}/>
        </Col>
        <Col className="itemCol2" lg={9}>
          {this.props.item.name}<br/>
          {this.props.item.description}<br/>
          {this.props.item.price}<br/>
        <p>seller: {this.props.item.sellerID}</p>
        </Col>
      </Row>
      <Row>hello</Row>
    </Container>
  );
}
}

export default Item
