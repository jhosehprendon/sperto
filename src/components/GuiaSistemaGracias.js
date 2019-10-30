import React from 'react';
import history from '../history';

const GuiaSitemaGracias = () => {
  return ( 
    <div>
      <div>
        <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
          <h2 style={{fontSize: '30px'}}>¡Muy bien! Tu Guía llegará en pocos minutos</h2>
          <h3>Antes de revisar tu email, ve este video</h3>
          <iframe title="guiaSistema" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/QU_7Wwj2f8w" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
} 

export default GuiaSitemaGracias