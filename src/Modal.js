import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
  render() {
    return (
          <div className={this.props.headingclass}>
          <form>
          <input name="EMAIL" placeholder="Enter Email" type="email" />
          <input name="PASSWORD" placeholder="Enter Password" type="password" />
          <button className="nw-btn primary-btn">Submit</button>
          <button onClick={this.onClose} className="nw-btn primary-btn">cancel</button>
          </form>
          </div>
    );
  }
}

export default Modal;
