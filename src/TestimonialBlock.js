import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class TestimonialBlock extends Component {
  render() {
    return (
        <div className={this.props.classname}>
        <img src={this.props.icon} className="testimonial-icon" alt="Testimonial Icon" />
        <p>{this.props.content}</p>
        <h4>{this.props.authorname}</h4>
        <h6>{this.props.designation}</h6>
        </div>
    );
  }
}

export default TestimonialBlock;
