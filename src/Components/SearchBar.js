import React, { Component } from 'react';
import * as API_UTILS from "../apiUtils.js";

export default class SearchBar extends Component {
  //Handle our query change and pass the result up to the app state
  updateQuery(string){
    this.props.onChangeHandler(string)
  }

  render() {
    const { searchQuery } = this.props

    return ( <input className="search"
                    type='text'
                    defaultValue={this.props.searchQuery}
                    onChange={ e => this.updateQuery(e.target.value)}/>);
  }
}
