import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Types } from './constants/types';
import { DropTarget } from 'react-dnd';
import Item from './Item';

const itemHolderTarget = {
  drop(props, monitor) {
//    moveItem(props.position);
    return monitor.getItem();
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class ItemHolder extends Component {
  render() {
    const { position, text, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div style={{border: '2px solid black', width:'100%', height:'100%'}}>
        <Item
          position={position}
          text={text}
          style={ isOver && {border: '1px solid blue'} }
        />
      </div>
    );
  }
}

ItemHolder.propTypes = {
  position: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default DropTarget(Types.ITEM, itemHolderTarget, collect)(ItemHolder);
