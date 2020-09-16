import React from 'react';
import history from '../../history';

class MiniClass1 extends React.Component {

  sendNextVideo = () => {
    window.location.href = "https://www.spertomedia.com/mini-class-2"
  }

  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', margin: '20px 0 20px 0'}}>
        <h3>1. Fundamentos del Marketing <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> &gt; 2. Audiencias de Facebook</span> <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> &gt; 3. Crea tu Campaña de Facebook</span></h3> 
        <h2 style={{fontSize: '30px'}}>Fundamentos del Marketing</h2>
        <h3>Aprende cómo maximizar los ingresos y construye un Negocio Exitoso</h3>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/NxVvuqzSVLY" allowfullscreen></iframe>
        <div>
          <button onClick={this.sendNextVideo} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '20px', padding: '12px' }} className="btn btn-success">Ir a Video 2</button>
        </div>
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

export default MiniClass1
