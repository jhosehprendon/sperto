import React from 'react';

class GraciasGuiaPerfectAd extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToCallBook = () => {
    window.location.href = "https://www.spertomedia.com/checkout/call-24"
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div className='consulta-title'>
            <h1>Tu Guía está en camino.</h1>
            <h1 style={{marginTop: '-10px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Pero ESPERA!!! Hay más</h1>
          </div>
          <div style={{fontSize: '25px'}} className='blog-content'>
            <p>Si quieres acelerar los resultados de tus campañas y comenzar a obtener ganacias más rápido... Puedo Ayudarte!</p>
            <p>He abierto cupos de consultoría personalizada por sólo $24.</p>
            <p>En la llamada vamos a analizar tu estrategia de marketing, audiencias y anuncios.</p>
            <p>Con esto vamos a definir un plan que te permita cumplir con tus objetivos y sacar mayor provecho de tu inversión.</p>
            <p>Normalmente el precio de esta consultoría es de $150... Pero aprecio que me has seguido y por eso voy a darte la oferta por sólo $24.</p>
            <p>Puedes agendar una llamada haciendo click en el botón de abajo...</p>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: '-50px'}}>
          <div style={{textAlign: 'center'}}>
            <button onClick={this.sendToCallBook} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agendar Llamada</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default GraciasGuiaPerfectAd