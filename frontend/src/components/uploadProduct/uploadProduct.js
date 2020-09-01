import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Alert from 'react-bootstrap/Alert'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'

class UploadProduct extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
      image: null,
      price: "",
      description: "",
      sellerID: "",
      successfulUpload: false,
      inputKey: ""
    }
    this.myRef = React.createRef();
  }

  captureText = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    captureFile = (e) => {
      this.setState({
        image: e.target.files[0]
      })
  }

onSubmit = (e) => {
  e.preventDefault()
  var formData = new FormData();
  formData.append("name", this.state.name);
  formData.append("price", this.state.price);
  formData.append("description", this.state.description);
  formData.append("image", this.state.image);
  formData.append("sellerID", this.props.currentUser._id);
  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/users/upload-product", requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        successfulUpload: true,
        name: "",
        price: "",
        description: "",
        sellerID: ""
      })
      this.myRef.current.value = null
    })
    .catch(error => console.log('error', error));
}

  returnHome = () => {
    this.props.history.push('/')
  }

  renderSuccessfulUpload = () => {
    if(this.state.successfulUpload){
      return (
        <Alert className="successfulUpload" variant="success" onClose={() => this.setState({successfulUpload:false})} dismissible>
          <p className="uploadProductAlertMessage">Upload Complete!</p>
        </Alert>
      );
    }
  }

  render(){
  return (
    <div className="uploadProduct">
      <Jumbotron className="uploadProductJumbotron">
        <h1 className="uploadProductH1">Upload a product!</h1>
        <form className="uploadProductForm">
          <label>Name:</label><br/>
          <input className="uploadProductInput"
            type="text" name="name" placeholder="name" value={this.state.name} onChange={this.captureText}/><br/>
          {this.renderSuccessfulUpload()}
          <label>Price:</label><br/>
          <input className="uploadProductInput"
            type="text" name="price" placeholder="price" value={this.state.price} onChange={this.captureText}/><br/>
          <label>Description:</label><br/>
          <input className="uploadProductInput"
            type="text" name="description" placeholder="description" value={this.state.description} onChange={this.captureText}/><br/>
          <label>Image:</label><br/>
          <input className="uploadProductInput"
            type="file" name="image" ref={this.myRef} onChange={this.captureFile}/><br/>
          <Button className="uploadProductButton" variant="primary" onClick={this.onSubmit}>Upload</Button>
          <Button className="uploadProductButton" variant="primary" onClick={this.returnHome}>Cancel</Button>
        </form>
      </Jumbotron>
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
  connect(mapStateToProps, mapDispatchToProps))(UploadProduct);
