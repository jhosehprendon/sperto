import React from 'react';
import history from '../../history';
import '../../css/Sequence.css';

class MiniClass3 extends React.Component {

  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
        <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-1')}>1. Estrategia de Marketing </span> &gt; <span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-2')}>2. Audiencias de Facebook </span> &gt; 3. Crea tu Campaña de Facebook</h3> 
        <h2 style={{fontSize: '30px'}}>Crea tu Campaña de Facebook</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/-EUL6I_MT98" allowfullscreen></iframe>
        <div style={{textAlign: "center"}} className='blog-content'>
          <h2>Coaching y Consultoría via Mensajería</h2>
          <div className="row">
            <div className="info-block">
              <div style={{marginRight: '30px', width: '100%'}}>
                <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$60/mes</h2>
                <p>(Pagos Mensuales)</p>
                <div id="paypal-button-1mes-consultoria" style={{textAlign: 'center', marginTop: '5px'}}></div>
              </div>
              <div style={{width: '100%'}}>
                <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$300/6meses</h2>
                <p>(Ahorra $60, Paga 6 meses a $50 cada uno)</p>
                <div id="paypal-button-6meses-consultoria" style={{textAlign: 'center', marginTop: '5px'}}></div>
              </div>
            </div>
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
