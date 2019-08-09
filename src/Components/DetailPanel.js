import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailPanel extends Component {

  static propTypes = {
    result: PropTypes.object,
    hideDetailHandler: PropTypes.func.isRequired
  }

  //Close the details
  hideDetails(result){
    this.props.hideDetailHandler(result);
  }

  render() {
    const { result, hideDetailHandler } = this.props

    return (
      result &&
      <div className="details">
        <h5>{result.TitleName}</h5>
        <h6>{result.ReleaseYear}</h6>
      </div>
    );
  }
}
