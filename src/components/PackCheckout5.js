import React from 'react';

class PackCheckout5 extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1>Consigue Intereses que Generan Ventas y Ganancias</h1>
        </div>
        <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
          <ul>
            <li>Acceso de por Vida a Herramienta de Intereses Ocultos</li>
            <li>Acceso a Entrenamiento de Estudio de Audiencias</li>
            <li>Acceso a Template de Intereses</li>
          </ul>
        </div>
        <div style={{fontSize: '24px', textAlign: 'center', width: '200px', margin: 'auto', marginTop: '-50px'}} className='blog-content'>
          <p><strong><span style={{textDecoration: 'line-through', color: 'red'}}>$180</span></strong></p>
          <p style={{marginTop: '-20px', color: '#00b300', fontSize: '40px'}}><strong>$5</strong></p>
        </div>
        <div id="paypal-button-pack-5" style={{textAlign: 'center', marginTop: '5px'}}></div>
        <div style={{fontSize: '14px', textAlign: 'center'}}>
          <p>Si tienes problemas para completar el pago escríbenos a:</p>
          <p style={{marginTop: '-10px'}}>jhosehp.rendon@gmail.com</p>
        </div>
      </div>
    </div>
    )
  }
} 

export default PackCheckout5