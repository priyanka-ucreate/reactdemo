import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
  render() {
    return (
      <div>
          <input name="EMAIL" placeholder="Enter Email" type="email" />
          <input name="PASSWORD" placeholder="Enter Password" type="password" />
          <button className="nw-btn primary-btn">Submit</button>
      </div>    
    );
  }
}

export default Modal;
