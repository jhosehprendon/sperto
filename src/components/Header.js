import React from 'react';
import '../css/Header.css'
import history from '../history';

class Header extends React.Component  {

  sendHome = () => {
    history.push('/')
  }

  render() {
    return (
      <div className="header-sperto">
        <p className="header__title" onClick={this.sendHome} style={{cursor: 'pointer'}}>Sperto Media</p>
        <div className="header__left">
          {/* <p className="header__left__align">About us</p> */}
          {/* <button 
            type="button" 
            class="btn heade btn-outline-primary button-header-variant"
          >
            ¿Quiéres Aumentar tus Ventas?
          </button> */}
        </div>
      </div>
    )
  } 
}


export default Header;