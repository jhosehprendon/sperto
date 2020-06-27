import React from 'react';
import '../css/Header.css'
import history from '../history';
import ModalAsk from './ModalAsk';

class HeaderEn extends React.Component  {

  sendHome = () => {
    history.push('/')
  }

  sendToConsult = () => {
    history.push('/consult')
  }

  renderCtaButton() {
    if (history.location.pathname === '/jobs-news-letter' 
      || history.location.pathname === '/jobs-news-letter/gracias' 
      || history.location.pathname === '/email/intro-upwork'
      || history.location.pathname === '/playlist-intro'
      || history.location.pathname === '/mini-class-1'
      || history.location.pathname === '/mini-class-2'
      || history.location.pathname === '/mini-class-3'
      || history.location.pathname === '/mini-class'
      || history.location.pathname === '/curso-marketing-digital'
      || history.location.pathname === '/guia-lead-magnet/gracias-manager'
      || history.location.pathname === '/guia-lead-magnet/gracias-marketer'
      || history.location.pathname === '/consulta') {
      return null
    } else {
      return (
        <div className="header__left__align header-hide">
          <button onClick={this.sendToConsult} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Call</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header-sperto">
        <p className="header__title" onClick={this.sendHome} style={{cursor: 'pointer'}}><img alt="logo" style={{width: '45px'}} src={require('../images/logo.png')} /></p>
        <div className="header__left">
          {this.renderCtaButton()}
        </div>
        <ModalAsk ref="child"/>
      </div>
    )
  } 
}


export default HeaderEn;