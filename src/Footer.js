import React, { Component } from 'react';
import TopProducts from './TopProducts';
import NewsLetter from './NewsLetter';
import InstagramFeed from './InstagramFeed';
import './App.css';

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
          <div className="container">
            <TopProducts heading="Top Products" classname="footer-block footer-navigation" />
            <NewsLetter heading="Newsletter" content="You can trust us. we only send promo offers, not a single spam." classname="footer-block newsletter-block" />
            <InstagramFeed heading="Instagram Feed" classname="footer-block instagram-block" />
          </div>
        </footer>  
    );
  }
}

export default Footer;
