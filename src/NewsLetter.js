import React, { Component } from 'react';
import './App.css';

class NewsLetter extends Component {
  render() {
    return (
          <div className={this.props.classname}>
          <h3>{this.props.heading}</h3>
          <p>{this.props.content}</p>
          <form>
          <input name="EMAIL" placeholder="Enter Email" type="email" />
          <button className="nw-btn primary-btn">Subscribe</button>
          </form>
          </div>
    );
  }
}

export default NewsLetter;
