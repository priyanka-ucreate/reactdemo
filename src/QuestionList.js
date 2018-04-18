import React, { Component } from 'react';
import './App.css';


export default class QuestionList extends Component {
  render() {
    const listItems = this.props.data.map((item) =>
      <div className="faq-block">
        <h3>{item.label}</h3>
        <p>{item.value}</p>
    </div>
  );

    return (
        <ol>
          {listItems}
        </ol>  
    );
  }
}