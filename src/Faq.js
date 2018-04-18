import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import {withRouter, Link} from 'react-router-dom';
import './App.css';

  class Faqs extends Component {
  render() {
    const numbers = ["Question 1: Lorem Ipsum is simply dummy text of the printing and type setting industry", 
                     "Question 2: Lorem Ipsum is simply dummy text of the printing and type setting industry", 
                     "Question 3: Lorem Ipsum is simply dummy text of the printing and type setting industry", 
                     "Question 4: Lorem Ipsum is simply dummy text of the printing and type setting industry", 
                     "Question 5: Lorem Ipsum is simply dummy text of the printing and type setting industry"];
    return (
      <div>
      <Header />
      <Banner heading="FAQs" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." classname="App-banner" />        
      <section className="faq-wrap">
          <div className="container">
            <QuestionList numbers={numbers} />
          </div>
      </section>      
      <Footer />
      </div>   
    );
  }
}

export default Faqs;
