import React, { Component } from 'react';
import logo from './logo.png';
import Modal from './Modal';
import './App.css';

class Header extends Component {
	constructor(props) {
        super(props);
        this.state = {
           isModalOpen: false, 
        };
        this.onView = this.onView.bind(this);
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
            <li><a href="#">HOME</a></li>
            <li><a href="#">WE OFFER</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">PRICE</a></li>
            <li> <button className="nw-btn primary-btn" onClick={this.onView}>Login</button></li>
          </ul>
          </div>
          {(this.state.isModalOpen===true) ? <Modal headingclass="modal-popup" /> : ''}
        </header>  
    );
  }
}

export default Header;

