import React, { Component } from 'react';
import './App.css';

class TopProducts extends Component {
  render() {
    return (
          <div className={this.props.classname}>
          <h3>{this.props.heading}</h3>
          <ul>
            <li><a href="#">Managed Website</a></li>
            <li><a href="#">Manage Reputation</a></li>
            <li><a href="#">Power Tools</a></li>
            <li><a href="#">Marketing Service</a></li>
          </ul>
          </div>
    );
  }
}

export default TopProducts;
