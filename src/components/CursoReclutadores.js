import React from 'react';

class CursoReclutadores extends React.Component {
  
  render() {
    return (
      <div style={{marginTop: '50px'}}>
        <div style={{margin: '10% 0 1% 0'}}>
          <h1 className='nosotros-banner'><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Inicia tu Dia con el Calendario lleno de Entrevistas con Candidatos Interesados <i className="fas fa-quote-right" style={{ color: '#f2c924'}}></i></h1>
        </div>
        <h2 style={{width: '80%', margin: '2% auto'}}>En este curso vas a conocer el poder del Marketing en el roceso de Reclutamiento y vas a poder crear tu sistema automático de generación de candidatos</h2>
        <div style={{textAlign: "center", marginTop: '6%'}}>
          <hr style={{width: '30%', backgroundColor: '#f2c924'}}></hr>
          <h2>Curso Avanzado de Marketing para Reclutadores IT</h2>
          <h2><span style={{textDecoration: 'line-through'}}>$1997</span> $197</h2>
        </div>
        <div style={{width: '300px', margin: '2% auto'}} id="paypal-button-container"></div>
        <div id="test"></div>
      </div>
    )
  }

}


export default CursoReclutadores