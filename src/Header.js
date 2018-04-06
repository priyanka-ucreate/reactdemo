import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">WE OFFER</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">PRICE</a></li>
          </ul>
          </div>
        </header>  
    );
  }
}

export default Header;
