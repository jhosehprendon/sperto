import React from 'react';

class GraciasGuiaAgencia extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToPack5 = () => {
    window.location.href = "https://www.spertomedia.com/checkout/pack-5"
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div className='consulta-title'>
            <h1>Tu Guía está en camino</h1>
            <h1 style={{marginTop: '-10px'}}>Revisa tu email y el spam</h1>
            <h1><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Pero ESPERA! Esto es Importante</h1>
          </div>
          <div style={{fontSize: '25px', color: '#283d54', marginBottom: '-5px'}} className='blog-content'>
            <h2>Para poner a funcionar esta máquina de adquisición de clientes necesitas saber cómo crear anuncios en Facebook e Instagram.</h2>
            <hr></hr>
            <p>Si quieres dar ese paso extra, controlar tu negocio y ser mejor que la competencia debes aprender los detalles.</p>
            <p>Te voy a enseñar esos detalles en una clase privada. Vas a aprender cómo crear anuncios en Facebook e Instagram para potenciar este sistema.</p>
            <p>Agenda tu clase privada conmigo por sólo $5</p>
          </div>
          <hr></hr>
            <h2 style={{textAlign: 'center', marginBottom: '-20px'}}>Todo por UN SÓLO pago de:</h2>
            <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$5</h2>
        </div>
        
        <div style={{textAlign: "center"}} className='blog-content'>
          <div id="paypal-agencia-5" style={{textAlign: 'center', marginTop: '5px'}}></div>
          <div style={{fontSize: '14px', textAlign: 'center'}}>
            <p>Si tienes problemas para completar el pago escríbenos a:</p>
            <p style={{marginTop: '-10px'}}>jhosehp@spertomedia.com</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default GraciasGuiaAgencia