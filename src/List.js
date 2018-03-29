import React, { Component } from 'react';
import ItemHolder from './ItemHolder';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List-shell">
        <p className="title">"Bon Iver - Blood Bank"</p>
        <ItemHolder className="m-pd" position="1" text="that secret that you know"/>
        <ItemHolder className="m-pd" position="3" text="it fucks with your honor"/>
        <ItemHolder className="m-pd" position="2" text="that you don't know how to tell"/>
        <ItemHolder className="m-pd" position="4" text="it teases your head"/>
      </div>
    );
  }
}

export default List;
