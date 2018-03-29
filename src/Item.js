import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Types } from './constants/types';
import { DragSource } from 'react-dnd';
import './Item.css';

const itemSource = {
  beginDrag(props) {
    return { itemPosition: props.position };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Item extends Component {
  render() {
    const { text, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="Item-shell">
        <p>{ text }</p>
      </div>
    );
  }
}

Item.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource(Types.ITEM, itemSource, collect)(Item);
