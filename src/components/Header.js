import React from 'react';
import '../css/Header.css'
import history from '../history';

class Header extends React.Component  {

  sendHome = () => {
    history.push('/')
  }

  sendNosotros = () => {
    history.push('/sobre-nosotros')
  }

  sendCursos = () => {
    history.push('/curso-sistema-reclutadores')
    window.location.reload(false)
  }

  render() {
    return (
      <div className="header-sperto">
        <p className="header__title" onClick={this.sendHome} style={{cursor: 'pointer'}}><img style={{width: '45px'}} src={require('../images/logo.png')} /></p>
        <div className="header__left">
          <div className="header__left__align">
            <p class="header__left-icons" onClick={this.sendCursos}>Cursos</p>
          </div>
          <div  className="header__left__align header-hide">
            <p class="header__left-icons" onClick={this.sendNosotros}>Sobre Nostros</p>
          </div>
        </div>
      </div>
    )
  } 
}


export default Header;