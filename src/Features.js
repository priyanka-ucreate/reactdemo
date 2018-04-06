import React, { Component } from 'react';
import callaction from './callaction-bg.png';
import './App.css';

class CallAction extends Component {
  render() {
    return (
        <section className="App-features">
          <div className="container">
            <div className="features-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.content}</p>
            <a className="primary-btn" href="#">{this.props.Btntext}</a>
            </div>
          </div>
        </section>  
    );
  }
}

export default CallAction;
