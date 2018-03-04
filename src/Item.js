import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text } = this.props;
    return (
      <div className="Item-shell">
        <p>{ text }</p>
      </div>
    );
  }
}

export default Item;
