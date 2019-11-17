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
    history.push('/entrenamiento')
  }

  render() {
    return (
      <div className="header-sperto">
        <p className="header__title" onClick={this.sendHome} style={{cursor: 'pointer'}}><img alt="logo" style={{width: '45px'}} src={require('../images/logo.png')} /></p>
        <div className="header__left">
          <div className="header__left__align">
            <p className="header__left-icons" onClick={this.sendCursos}>Entrenamiento</p>
          </div>
          <div  className="header__left__align header-hide">
            <p className="header__left-icons" onClick={this.sendNosotros}>Sobre Nostros</p>
          </div>
        </div>
      </div>
    )
  } 
}


export default Header;