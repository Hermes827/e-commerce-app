import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Search } from 'react-bootstrap-icons';

class SearchBar extends React.Component {

  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

  captureText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    }

  onSubmit = (e) => {
    e.preventDefault()
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

  fetch(`http://localhost:4000/products/find?searchTerm=${this.state.searchTerm}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

    //searchbar function is partially done, properly returns json data, just need to fill out
    //the rest of the functionality

  render(){
  return (
    <InputGroup className={(localStorage.token) ? "navbarSearchbarInputGroupLoggedIn" : "navbarSearchbarInputGroupLoggedOut"}>
    <Form.Control type="text" placeholder="Search" name="searchTerm" onChange={this.captureText}/>
    <InputGroup.Append>
      <InputGroup.Text><Search onClick={this.onSubmit}/></InputGroup.Text>
    </InputGroup.Append>
    </InputGroup>
  );
}
}

export default SearchBar
