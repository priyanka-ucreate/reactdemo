import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import logo from './images/logo.png';
import close from './images/close-icon.png';
import Modal from './Modal';
import About from './About';
import Faqs from './Faq';
import './App.css';

class Header extends Component {
  constructor(props) {
        super(props);
        this.state = {
           isModalOpen: false, 
        };
        this.onView = this.onView.bind(this);
        this.onClose = this.onClose.bind(this);
    }

  onView(){
        this.setState({
      isModalOpen: true
    });
   }

   onClose(){
      this.setState({
      isModalOpen: false
    });
   }

  render() {
    return (
        <header className="App-header">
          <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
              <li className="active"><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="#">WE OFFER</Link></li>
              <li><Link to="#">PROJECT</Link></li>
              <li><Link to="#">PRICE</Link></li>
              <li><button className="nw-btn primary-btn" onClick={this.onView}>Login</button></li>
          </ul>

          </div>
          {(this.state.isModalOpen===true) ? <div className="modal-popup"><div className="modal-inner"><Modal /><button onClick={this.onClose} type="button" className="close-icon"><img src={close} /></button></div></div> : ''}
        </header>  
    );
  }
}

export default Header;

