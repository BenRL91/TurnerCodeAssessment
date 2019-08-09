import React, { Component } from 'react';
import * as API_UTILS from '../apiUtils.js';

import Result from './Result.js'

export default class ResultContainer extends Component {
  constructor(...args){
    super(...args);

    this.state = {
      results: [],
      loading: true
    }
  }

  fetchTitles = () => {
    let titleResults = API_UTILS.getJSON('titles');
    titleResults.then((result) => {
      this.setState((prevState, props) => {
        return {
          results: result,
          loading: false
        }
      })
    })
  }

  renderResult(result){
    return <Result data={result}/>
  }

  componentWillMount(){
    this.fetchTitles();
  }

  render() {
    const { results } = this.state;
    return (
      <ul>
        { results.length > 0 ? results.map(result => this.renderResult(result)) : null }
      </ul>
    );
  }
}
