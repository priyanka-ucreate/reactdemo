import React, { Component } from 'react';
import TestimonialBlock from './TestimonialBlock';
import testimonialicon1 from './t1.png';
import testimonialicon2 from './t2.png';
import testimonialicon3 from './t3.png';
import './App.css';

class Testimonials extends Component {
  render() {
    return (
        <section className="testimonials-wrap">
          <div className="container">
          <div className={this.props.headingclass}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.content}</p>
          </div>
            <TestimonialBlock icon={testimonialicon1} authorname="Mark Alviro Wiens" designation="CEO at Google" content="Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more." classname="testimonial-block" />
            <TestimonialBlock icon={testimonialicon2} authorname="Mark Alviro Wiens" designation="CEO at Google" content="Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more." classname="testimonial-block" />
            <TestimonialBlock icon={testimonialicon3} authorname="Mark Alviro Wiens" designation="CEO at Google" content="Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more." classname="testimonial-block" />          
          </div>
        </section>  
    );
  }
}

export default Testimonials;
