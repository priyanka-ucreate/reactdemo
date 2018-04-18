import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';


class QuestionList extends Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number} />
  );

    return (
        <ol>
          {listItems}
        </ol>  
    );
  }
}

export default QuestionList;
