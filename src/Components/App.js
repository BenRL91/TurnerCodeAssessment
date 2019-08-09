import React, { Component } from 'react';
import ResultContainer from './ResultContainer.js';
import Result from './Result.js';

export default class App extends Component {
  render() {
    return (
      <div>
       <input type='text' className="search"/>
       <h3>Results</h3>
       <ResultContainer/>
      </div>
    );
  }
}
