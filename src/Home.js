import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import CallAction from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
      <Header />
      <Banner heading="All you want is here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." classname="App-banner" />
      <Services heading="Our Offered Services" content="Who are in extremely love with eco friendly system." headingclass="service-heading" />
      <CallAction heading="Got Impressed to our features" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." Btntext="Request Free Demo" />
      <Testimonials heading="Testimonial from our Clients" content="Who are in extremely love with eco friendly system." headingclass="testimonial-heading" />
      <Footer />
      </div>
    );
  }
}

export default Home;
