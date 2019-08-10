import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailPanel extends Component {

  static propTypes = {
    result: PropTypes.object,
    hideDetailHandler: PropTypes.func.isRequired
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
      return p.RoleType === 'Director';
    })
  }

  getActors(participants){
    return participants.filter(p => {
      return p.RoleType === 'Actor';
    })
  }

  getOthers(participants){
    return participants.filter(p => {
      return p.RoleType != 'Director' && p.RoleType != 'Actor';
    })
  }

  getAwardStatus(winState){
    if(winState){
      return 'Win';
    }else{
      return 'Nomination';
    }
  }

  //Close the details
  hideDetails(){
    this.props.hideDetailHandler();
  }


  render() {
    const { result, hideDetailHandler } = this.props
    return (
      result &&
      <div className='details'>
        <button className='close' onClick={ e => this.hideDetails() }>X</button>
        <h2 className="title">{ result.TitleName }</h2>
        <h6 className="year">Reslease Year: { result.ReleaseYear }</h6>
        <h6 className="director">Directed by: { this.getDirector(result.Participants)[0].Name }</h6>
        <ul className="genres">
        <h3>Genres</h3>
          { result.Genres.map( genre => { return <li key={genre}>{ genre } </li> }) }
        </ul>
        <ul className="cast">
        <h3>Cast</h3>
          { this.getActors(result.Participants).map( participant => { return <li key={ `${participant.ParticipantId}-${participant.RoleType}` }>{ participant.Name } </li> }) }
        </ul>
        <ul className="others">
        <h3>Other Production</h3>
          { this.getOthers(result.Participants).map( participant => { return <li key={ `${participant.ParticipantId}-${participant.RoleType}` }>{ participant.Name } - { participant.RoleType }</li> }) }
        </ul>
        {
          result.Awards && <ul className="awards">
                    <h3>Awards</h3>
                    { result.Awards.map( award => { return <li className='award' key={this.getAwardKey(award)}>{`${award.Award}`}<span className='award-detail'> - {this.getAwardStatus(award.AwardWon)}</span> </li> }) }
                  </ul>
        }
      </div>
    );
  }
}

/*
Awards, Genres, Participants -> RoleType, ReleaseYear, TitleName,
*/
