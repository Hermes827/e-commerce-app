import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { withRouter } from 'react-router';

class UploadProduct extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
      image: "",
      price: "",
      description: "",
      sellerID: ""
    }
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
  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/users/upload-product", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log('error', error));
}

  returnHome = () => {
    this.props.history.push('/')
  }

  render(){
  return (
    <div className="uploadProduct">
      <Jumbotron className="uploadProductJumbotron">
        <h1 className="uploadProductH1">Upload a product!</h1>
        <form className="uploadProductForm">
          <label>Name:</label><br/>
          <input className="uploadProductInput" type="text" name="name" placeholder="name" onChange={this.captureText}/><br/>
          <label>Price:</label><br/>
          <input className="uploadProductInput" type="text" name="price" placeholder="price" onChange={this.captureText}/><br/>
          <label>Description:</label><br/>
          <input className="uploadProductInput" type="text" name="description" placeholder="description" onChange={this.captureText}/><br/>
          <label>Image:</label><br/>
          <input className="uploadProductInput" type="file" name="image" onChange={this.captureFile}/><br/>
          <Button className="uploadProductButton" variant="primary" onClick={this.onSubmit}>Upload</Button>
          <Button className="uploadProductButton" variant="primary" onClick={this.returnHome}>Cancel</Button>
        </form>
      </Jumbotron>
    </div>
  );
}
}

export default withRouter(UploadProduct)
