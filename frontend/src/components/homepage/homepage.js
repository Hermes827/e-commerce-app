import React from 'react';
import Marketplace from '../marketplace/marketplace'

class Homepage extends React.Component {

  constructor(){
    super()
    }

  render(){
  return (
    <div>
      homepage
      <Marketplace/>
    </div>
  );
}
}

export default Homepage
