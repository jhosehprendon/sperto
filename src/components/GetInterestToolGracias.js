import React from 'react';

class GetInterestToolGracias extends React.Component {

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
          <h1>Te hemos Enviado un Email con Acceso a la Herramienta</h1>
        </div>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p><strong>Importante!</strong></p>
          <p> Revisa tu email para acceder. Si no lo encuentras en la bandeja de entrada revisa en correos no deseados.</p>
        </div>
      </div>
    </div>
    )
  }
} 

export default GetInterestToolGracias