import React, { Component } from 'react';
import InstagramImage1 from './i1.png';
import InstagramImage2 from './i2.png';
import InstagramImage3 from './i3.png';
import InstagramImage4 from './i4.png';
import './App.css';

class InstagramFeed extends Component {
  render() {
    return (
          <div className={this.props.classname}>
          <h3>{this.props.heading}</h3>
          <ul>
          <li><img src={InstagramImage1} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage2} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage3} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage4} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage3} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage4} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage1} className="instagram-image" alt="Instagram Feed" /></li>
          <li><img src={InstagramImage2} className="instagram-image" alt="Instagram Feed" /></li>
          </ul>
          </div>
    );
  }
}

export default InstagramFeed;
