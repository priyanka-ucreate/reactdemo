import React, { Component } from 'react';
import Faqcontent from './Faqcontent.json';
import QuestionList from './QuestionList';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import {withRouter, Link} from 'react-router-dom';
import './App.css';

  class Faqs extends Component {
  render() {
    
    return (
      <div>
      <Header />
      <Banner heading="FAQs" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." classname="App-banner" />        
      <section className="faq-wrap">
          <div className="container">
             <QuestionList data={Faqcontent.questions}/>
          </div>
      </section>      
      <Footer />
      </div>   
    );
  }
}

export default Faqs;
