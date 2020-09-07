import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profile from '../profile/profile.js'
import { Link } from "react-router-dom";

class Item extends React.Component {

  constructor(){
    super()
    this.state = {
      seller: {},
      showProfile: false
    }
  }

  toggleProfile = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    fetch(`http://localhost:4000/users/find/?userID=${this.props.item.sellerID}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          seller: result,
          showProfile: true
        })
        console.log(result)
      })
      .catch(error => console.log('error', error));
      this.renderProfile()
      }

      renderProfile = () => {
        if(this.state.showProfile){
        return <Profile toggle={this.toggleProfileState}/>
        }
      }

      toggleProfileState = () => {
        this.setState({
          showProfile: !this.state.showProfile
        })
      }


  render(){
  return (
    <Container className="item">
      <Row>
        <Col className="itemCol1" lg={3}>
        <img className="itemIMG" src={this.props.item.image} alt="item"/>
        </Col>
        <Col className="itemCol2" lg={9}>
          {this.props.item.name}<br/>
          {this.props.item.description}<br/>
          {this.props.item.price}<br/>
        <div>seller: <div className="itemSellerUsername" onClick={this.toggleProfile}>{this.props.item.sellerUsername}</div></div>
        {this.renderProfile()}
        </Col>
      </Row>
      <Row>
        <button>remove item from shopping cart</button>

      </Row>

    </Container>
  );
}
}

export default Item
