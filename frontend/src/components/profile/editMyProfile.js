import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { getUserInfo } from '../../actions/index.js'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class EditMyProfile extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
      profileImg: null,
      price: "",
      description: "",
      sellerID: "",
      successfulUpload: false,
      inputKey: "",
      changePicture: false
    }
    this.myRef = React.createRef();
  }

  changeProfilePicture = () => {
    this.setState({
      changePicture: !this.state.changePicture
    })
    }

  onSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData();
    // formData.append("name", this.state.name);
    // formData.append("price", this.state.price);
    // formData.append("description", this.state.description);
    formData.append("profileImg", this.state.image);
    // formData.append("sellerID", this.props.currentUser._id);
    var requestOptions = {
      method: 'PUT',
      body: formData,
      redirect: 'follow'
    };
    fetch(`http://localhost:4000/users/edit?userID=${this.props.currentUser._id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          successfulUpload: true,
          name: "",
          price: "",
          description: "",
          sellerID: ""
        })
        this.props.getUserInfo(localStorage.token)
        this.myRef.current.value = null
      })
      .catch(error => console.log('error', error));
  }


  renderSelectPicture =() => {
    if(this.state.changePicture){
      return (
        <div>
        <input type="file" name="image" ref={this.myRef} onChange={this.captureFile}/><br/>
        <Button onClick={this.onSubmit}>Submit</Button>
        </div>
      )
    }
  }

  captureFile = (e) => {
    this.setState({
      image: e.target.files[0]
    })
}


  render(){
  return (
      <Card className="editMyProfile">
        <div className="editMyProfileDivContainer">
        <Card.Img className="editMyProfileImg" variant="top" src={this.props.currentUser.profileImg}/>
        <div className="editMyProfileDivContainer1">
        <Button className="editMyProfileImgButton" onClick={this.changeProfilePicture}>Change Profile Picture</Button>
        {this.renderSelectPicture()}
        </div>
        </div>
        <Card.Body>
          <Card.Title>{this.props.currentUser.username}</Card.Title>
          <Card.Text>
            blurb
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Location: {null}</ListGroup.Item>
          <ListGroup.Item>Member Since: {null}</ListGroup.Item>
          <ListGroup.Item>Name: {null}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Reviews</Card.Link>
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
  connect(mapStateToProps, mapDispatchToProps))(EditMyProfile);
