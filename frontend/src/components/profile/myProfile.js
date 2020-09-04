import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class MyProfile extends React.Component {

  render(){
  return (
      <Card className="myProfile">
        <Card.Img className="myProfileImg" variant="top" src={this.props.currentUser.profileImg}/>
        <Card.Body>
          <Card.Title>{this.props.currentUser.username}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        {console.log(this.props.currentUser)}
      </Card>
  );
}
}

const mapDispatchToProps = {
  getUserInfo
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps))(MyProfile);
