import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import CallAction from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Banner heading="All you want is here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <Services heading="Our Offered Services" content="Who are in extremely love with eco friendly system." headingclass="service-heading" />
      <CallAction heading="Got Impressed to our features" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." Btntext="Request Free Demo" />
      <Testimonials heading="Testimonial from our Clients" content="Who are in extremely love with eco friendly system." headingclass="testimonial-heading" />
      <Footer />
      </div>
    );
  }
}

export default App;
