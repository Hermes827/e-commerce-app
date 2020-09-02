import React from 'react';

class Item extends React.Component {

  render(){
  return (
    <div className="item">
    {this.props.item.name}
    </div>
  );
}
}

export default Item
