import React, { Component } from 'react';
import './App.css';

class InstagramFeed extends Component {
  render() {
    return (
          <div className={this.props.classname}>
          <h3>{this.props.heading}</h3>
          <ul>
          <li></li>
          </ul>
          </div>
    );
  }
}

export default InstagramFeed;
