import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ResultContainer extends Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
    displayDetailHandler: PropTypes.func.isRequired
  }

  // Filter our results based on the query we're given
  filterResult(result){
    const {searchQuery} = this.props;
    /* TODO: Use regex for substr match */

    return result.TitleName.toLowerCase().includes(searchQuery.toLowerCase());
  }

  // Display a single result's details
  displayDetails(result){
    this.props.displayDetailHandler(result);
  }

  // Display the result's title on the page
  renderResult(result){
    return (
      <li className='result' key={result._id} onClick={e => this.displayDetails(result)}>
        {result.TitleName}
      </li>)
  }

  render() {
    const {results} = this.props

    return (
      <ul className='list'>
      <h2>Results</h2>
        {results
          .filter(result => this.filterResult(result))
          .map(result => this.renderResult(result))
        }
      </ul>
    );
  }
}
