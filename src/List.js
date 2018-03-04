import React, { Component } from 'react';
import Item from './Item';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List-shell">
        <p className="title">"Bon Iver - Blood Bank"</p>
        <Item className="m-pd" text="that secret that you know"/>
        <Item className="m-pd" text="it fucks with your honor"/>
        <Item className="m-pd" text="that you don't know how to tell"/>
        <Item className="m-pd" text="it teases your head"/>
      </div>
    );
  }
}

export default List;
