import React from 'react';

class FitnessCallSales extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div style={{color: '#283d54', marginBottom: '40px'}} className='blog-content'>
            <h1 style={{fontSize: '40px'}}>Conoce Cómo Puedes Conseguir de 10 a 20 Clientes a la Semana para tu Negocio de Fitness Coach</h1>
            <h2 style={{fontSize: '30px'}}>Sin Depender de un Tercero (GYM, Studio, etc)</h2>
          </div>
          <hr></hr>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <h2>Toma Control sobre tu Negocio e Ingresos.</h2>
            <h2 style={{marginTop: '-10px'}}>Todo se esta Moviendo Online... Incluyendo el Mundo Fitness.</h2>
          </div>
          <div style={{fontSize: '25px', color: '#283d54', marginTop: '-50px'}} className='blog-content'>
            <p>Conoce el sistema que puedes poner en marcha para adquirir clientes de manera predecible con este entrenamiento.</p>
            <hr></hr>
            <h2>Entrenamiento Introductorio de Marketing para Fitness Coaches</h2>
            <p>Clase en vivo 1 a 1 via Zoom</p>
            <ul style={{color: '#ff5757'}}>
              <li>Cómo Aumentar Ingresos por Cliente</li>
              <li>Sistema de Marketing</li>
              <li>Fuentes de Adquisión de Clientes</li>
            </ul>
            <h2 style={{textAlign: 'center', marginBottom: '-20px'}}>Todo por UN SÓLO pago de:</h2>
            <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$5</h2>
            <hr></hr>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: '-50px'}} className='blog-content'>
          <div id="paypal-button-fitness-intro" style={{textAlign: 'center', marginTop: '5px'}}></div>
          <div style={{fontSize: '14px', textAlign: 'center'}}>
            <p>Si tienes problemas para completar el pago escríbenos a:</p>
            <p style={{marginTop: '-10px'}}>jhosehp@spertomedia.com</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default FitnessCallSales