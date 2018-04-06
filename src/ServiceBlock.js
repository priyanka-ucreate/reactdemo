import React, { Component } from 'react';
import './App.css';

class ServiceBlock extends Component {
  render() {
    return (
        <div className={this.props.classname}>
        <div className="service-icon-wrap"><img src={this.props.icon} className="service-icon" alt="Service Icon" /></div>
        <div className="service-text-wrap"><h4>{this.props.heading}</h4>
        <p>{this.props.content}</p></div>
        </div>
    );
  }
}

export default ServiceBlock;
