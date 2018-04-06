import React, { Component } from 'react';
import bannerimage from './header-bg.png';
import './App.css';

class Banner extends Component {
  render() {
    return (
        <section className="App-banner">
          <div className="container">
            <div className="banner-text">
            <h1>{this.props.heading}</h1>
            <p>{this.props.content}</p>
            </div>
          </div>
        </section>  
    );
  }
}

export default Banner;
