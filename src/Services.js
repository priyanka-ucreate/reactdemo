import React, { Component } from 'react';
import ServiceBlock from './ServiceBlock';
import serviceicon1 from './images/s1.png';
import serviceicon2 from './images/s2.png';
import serviceicon3 from './images/s3.png';
import serviceicon4 from './images/s4.png';
import './App.css';

class Services extends Component {
  render() {
    return (
        <section className="services-wrap">
          <div className="container">
          <div className={this.props.headingclass}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.content}</p>
          </div>
            <ServiceBlock icon={serviceicon1} heading="Unlimited Colors" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." classname="service-block" />
            <ServiceBlock icon={serviceicon2} heading="Smart Security" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." classname="service-block" />
            <ServiceBlock icon={serviceicon3} heading="Endless Support" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." classname="service-block" />
            <ServiceBlock icon={serviceicon4} heading="Smart Security" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." classname="service-block" />
          </div>
        </section>  
    );
  }
}

export default Services;
