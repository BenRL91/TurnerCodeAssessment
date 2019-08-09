import React, { Component } from 'react';
import * as API_UTILS from "../apiUtils.js";

import SearchBar from './SearchBar.js';
import ResultContainer from './ResultContainer.js';
import DetailPanel from './DetailPanel.js';

export default class App extends Component {
  constructor(...args){
    super(...args);

    //Initialize our state
    this.state = {
      results: [],
      loading: true,
      searchQuery: "",
      displayDetails: null
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

  displayDetailHandler = (result) => {
    this.setState((prevState, props) => {
      return {
        displayDetails: result
      }
    })
  }

  hideDetailHandler = () => {
    this.setState((prevState, props) => {
      return {
        displayDetails: null
      }
    })
  }


  render() {
    const { searchQuery, results, displayDetails, loading } = this.state;
    return (
      loading
      ? <div className="loader">Loading...</div>
      : <div className="app">
       <SearchBar
        searchQuery={searchQuery}
        onChangeHandler={this.onChangeHandler}/>
       <ResultContainer
        results={results}
        searchQuery={searchQuery}
        displayDetailHandler={this.displayDetailHandler}/>
       <DetailPanel
        result={displayDetails}
        hideDetailHandler={this.hideDetailHandler}/>
      </div>
    );
  }
}
