import React from 'react';

class CallCheckout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1>Llamada de Consultoría Personalizada</h1>
        </div>
        <p style={{color: '#304057', fontSize: '20px', marginTop: '20px', textAlign: 'center'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Revisemos tus Audiencias y Plan de Marketing</p>
        <p style={{color: '#304057', fontSize: '20px', marginTop: '-10px', textAlign: 'center'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Vende más y Acelera el Crecimiento de tu Negocio</p>
        <div style={{fontSize: '24px', textAlign: 'center', width: '200px', margin: 'auto'}} className='blog-content'>
          <p><strong><span style={{textDecoration: 'line-through'}}>$150</span></strong></p>
          <p style={{marginTop: '-20px'}}><strong>$24</strong></p>
          <div id="paypal-button-call-24"></div>
        </div>
        <div style={{fontSize: '14px', textAlign: 'center'}}>
          <p>Si tienes problemas para completar el pago escríbenos a:</p>
          <p style={{marginTop: '-10px'}}>jhosehp.rendon@gmail.com</p>
        </div>
      </div>
    </div>
    )
  }
} 

export default CallCheckout