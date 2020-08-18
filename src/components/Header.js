import React from 'react';
import '../css/Header.css'
import history from '../history';
import ModalAsk from './ModalAsk';

class Header extends React.Component  {

  sendHome = () => {
    history.push('/es')
  }

  openModal = () => {
    if(history.location.pathname === '/es') {
      history.push('/consulta')
    } else {
      this.refs.child.openModal();
    }
  }

  sendToGuia = () => {
    history.push('/guia/perfect-ad')
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
      || history.location.pathname === '/consulta'
      || history.location.pathname === '/checkout/basico'
      || history.location.pathname === '/checkout/completo'
      || history.location.pathname === '/checkout/call-24'
      || history.location.pathname === '/interest-training'
      || history.location.pathname === '/guia-anuncio/descarga'
      || history.location.pathname === '/guia/perfect-ad'
      || history.location.pathname === '/guia/perfect-ad/gracias'
      || history.location.pathname === '/checkout/call-15'
      || history.location.pathname === '/checkout/pack-5'
      || history.location.pathname === '/blog/cbo'
      || history.location.pathname === '/blog/pixel'
      || history.location.pathname === '/secreto-2'
      || history.location.pathname === '/consultoria'
      || history.location.pathname === '/fitness-coach'
      || history.location.pathname === '/fitness-coach/agenda'
      || history.location.pathname === '/guia/agencia'
      || history.location.pathname === '/guia/agencia/gracias'
      || history.location.pathname === '/guia/agencia/descarga'
      || history.location.pathname === '/agencia/llamada'
      || history.location.pathname === '/agencia/clase'
      || history.location.pathname === '/guia/recruiter'
      || history.location.pathname === '/guia/recruiter/gracias'
      || history.location.pathname === '/guia/recruiter/descarga'
      || history.location.pathname === '/recruiter/llamada/checkout'
      || history.location.pathname === '/es') {
      return null
    } else {
      return (
        // <div className="header__left__align header-hide">
        //   <button onClick={this.openModal} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Agenda una Consulta</button>
        // </div>
        <div className="header__left__align header-hide">
          <button onClick={this.sendToGuia} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Guia Anuncio de FB Perfecto</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header-sperto">
        <p className="header__title" onClick={this.sendHome} style={{cursor: 'pointer'}}><img alt="logo" style={{width: '45px'}} src={require('../images/logo.png')} /></p>
        <div className="header__left">
          {/* <div className="header__left__align">
            <p className="header__left-icons" onClick={this.sendNosotros}>About Us</p>
          </div> */}
          {this.renderCtaButton()}
        </div>
        <ModalAsk ref="child"/>
      </div>
    )
  } 
}


export default Header;