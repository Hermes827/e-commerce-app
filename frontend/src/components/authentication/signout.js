import React from 'react';
import { withRouter } from 'react-router';

class Signout extends React.Component{

  componentDidMount(){
    delete localStorage.token
    this.props.history.push("/")
  }

  render(){
  return (
    <div>
    </div>
  );
}
}

export default withRouter(Signout)
