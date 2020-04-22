import React from 'react';

class GraciasGuiaLmMarketer extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/jhosehp-rendon"
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
          <p>Pero antes, te invito a conectar conmigo en LinkedIn asi podemos compartir más información de marketing y oportunidades.</p>
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        <div style={{textAlign: 'center'}}>
          <button onClick={this.sendToLinkedIn} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Conectar en LinkedIn</button>
        </div>
      </div>
    </div>
    )
  }
} 

export default GraciasGuiaLmMarketer