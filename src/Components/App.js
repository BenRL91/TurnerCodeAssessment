import React, { Component } from 'react';
import * as API_UTILS from "../apiUtils.js";

import SearchBar from './SearchBar.js';
import ResultContainer from './ResultContainer.js';
import Result from './Result.js';

export default class App extends Component {
  constructor(...args){
    super(...args);

    //Initialize our state
    this.state = {
      results: [],
      loading: true,
      searchQuery: ""
    }
  }

  //Fetch our data
  componentWillMount(){
    this.fetchTitles();
  }

  //Need to have data to search
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

  //Callback to obtain the new query state
  onChangeHandler = (string) => {
    this.setState((prevState, props) => {
      return { searchQuery: string };
    })
  }


  render() {
    const { searchQuery, results, loading } = this.state;
    return (
      <div>
       <SearchBar searchQuery={searchQuery} onChangeHandler={this.onChangeHandler}/>
       <ResultContainer results={results} searchQuery={searchQuery}/>
      </div>
    );
  }
}
