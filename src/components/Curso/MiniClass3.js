import React from 'react';
import history from '../../history';
import '../../css/Sequence.css';

class MiniClass3 extends React.Component {

  sendFirstVideo = () => {
    window.location.href = "https://www.spertomedia.com/mini-class-1"
  }

  sendSecondVideo = () => {
    window.location.href = "https://www.spertomedia.com/mini-class-2"
  }

  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
        <h3><span style={{cursor:'pointer'}} onClick={this.sendFirstVideo}>1. Estrategia de Marketing </span> &gt; <span style={{cursor:'pointer'}} onClick={this.sendSecondVideo}>2. Audiencias de Facebook </span> &gt; 3. Crea tu Campaña de Facebook</h3> 
        <h2 style={{fontSize: '30px'}}>Crea tu Campaña de Facebook</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/4D2dIiv_Pmw" allowfullscreen></iframe>
        <div style={{textAlign: "center"}} className='blog-content'>
          <h2>Curso Avanzado y Práctico de Marketing Digital, Facebook e Instagram Ads</h2>
          <p>Duración un mes</p>
          <p style={{marginTop: '-20px'}}>Recibirás 2 clases intensivas cada semana</p>
          <p style={{marginTop: '-20px'}}>Incluye acceso de por vida a grupo de Facebook</p>
          <p style={{marginTop: '-20px'}}>Estaré guiándote y respondiendo tus dudas</p>
          <div>
            <h2 style={{textAlign: 'center', fontSize: '30px', textDecoration: 'line-through', marginBottom: '-20px'}}>$400</h2>
            <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$200</h2>
            <div id="paypal-button-curso-200" style={{textAlign: 'center', marginTop: '5px'}}></div>
          </div>
          <div style={{fontSize: '14px', textAlign: 'center'}}>
            <p>(Si no aparece los métodos de pago, refrésca la página)</p>
            <p>Si tienes problemas para completar el pago escríbenos a:</p>
            <p style={{marginTop: '-10px'}}>jhosehp@spertomedia.com</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default MiniClass3
