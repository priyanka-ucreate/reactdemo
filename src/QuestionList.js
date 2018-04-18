import React, { Component } from 'react';
import './App.css';


export default class QuestionList extends Component {
  render() {
    const listItems = this.props.data.map((item) =>
    <div className="col-xs-12 col-sm-6 m-b-30">
      <div className="col_services">
        <h3>{item.label}</h3>
        <p>{item.value}</p>
      </div>
    </div>
  );

    return (
        <ol>
          {listItems}
        </ol>  
    );
  }
}