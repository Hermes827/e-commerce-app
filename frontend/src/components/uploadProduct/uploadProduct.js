import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { withRouter } from 'react-router';

class UploadProduct extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
      // image: {
      //     type: String
      // },
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

onSubmit = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({"name": this.state.name, "price": this.state.price,
    "description": this.state.description});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
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
          <input className="uploadProductInput" type="file" name="image"/><br/>
          <Button className="uploadProductButton" variant="primary" onClick={this.onSubmit}>Upload</Button>
          <Button className="uploadProductButton" variant="primary" onClick={this.returnHome}>Cancel</Button>
        </form>
      </Jumbotron>
    </div>
  );
}
}

export default withRouter(UploadProduct)
