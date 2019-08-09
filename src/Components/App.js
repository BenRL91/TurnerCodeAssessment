import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
       <input type='text' className="search"/>
       <h3>Results</h3>
       <ul>
         Results go here
       </ul>
      </div>
    );
  }
}
