import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailPanel extends Component {

  static propTypes = {
    result: PropTypes.object,
    hideDetailHandler: PropTypes.func.isRequired
  }

  //Close the details
  hideDetails(){
    this.props.hideDetailHandler();
  }

  getAwardKey(award){
    if(award.Participants){
      return `${award.AwardCompany}-${award.Award}-${award.AwardYear}-${award.Participants[0]}`
    }else {
      return `${award.AwardCompany}-${award.Award}-${award.AwardYear}`
    }
  }

  getDirector(participants){
    return participants.filter(p => {
      return p.RoleType == 'Director';
    })
  }

  render() {
    const { result, hideDetailHandler } = this.props
    console.log(result)
    return (
      result &&
      <div className='details'>
        <button className='close' onClick={ e => this.hideDetails() }>X</button>
        <h5 className="title">{ result.TitleName }</h5>
        <h6 className="year">{ result.ReleaseYear }</h6>
        <h6 className="director">Directed by: { this.getDirector(result.Participants)[0].Name }</h6>
        <ul className="genres">
          { result.Genres.map( genre => { return <li key={genre}>{ genre } </li> }) }
        </ul>
        <ul className="actors">
          { result.Participants.map( participant => { return <li key={ `${participant.ParticipantId}-${participant.RoleType}` }>{ participant.Name } </li> }) }
        </ul>
        <ul className="others">
          { result.Participants.map( participant => { return <li key={ `${participant.ParticipantId}-${participant.RoleType}` }>{ participant.Name } </li> }) }
        </ul>
        {
          result.Awards && <ul className="awards">
                    { result.Awards.map( award => { return <li key={this.getAwardKey(award)}>{ award.Award } </li> }) }
                  </ul>
        }
      </div>
    );
  }
}

/*
Awards, Genres, Participants -> RoleType, ReleaseYear, TitleName,
*/
