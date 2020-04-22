import React from 'react';

class GraciasGuiaLmManager extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/30min"
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1>Tu Guía está en camino.</h1>
        </div>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>En pocos minutos llegará a tu email. Si no la encuentras en la bandeja de entrada revisa en correos no deseados.</p>
          <p>Pero antes, lee este anuncio importante:</p>
          <p>Si estás gastando dinero en Marketing pero no aumentas tus ventas... si Facebook o Instagram ya no te es rentable y temes que tu negocio no pueda sostenerse por más tiempo... Entonces, podemos ayudarte.</p>
          <p>O... Si esas planeando lanzar tu nuevo emprendimiento o nuevo producto, también podemos ayudarte.</p>
          <p>Estoy abriendo cupos para evaluar tu negocio GRATIS y analizar las oportunidades de implementar el Sistema de Marketing Inteligente.</p>
          <p>En esta llamada voy a evaluar tu negocio, determinar puntos de mejoras y darte una guía de cómo puedes poner en práctica el sistema. Agenda tu llamada Gratis! Haz click abajo para elegir dia y hora.</p>
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        <div style={{textAlign: 'center'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
        </div>
      </div>
    </div>
    )
  }
} 

export default GraciasGuiaLmManager