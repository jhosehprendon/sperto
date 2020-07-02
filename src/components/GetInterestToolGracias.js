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
        <div style={{fontSize: '24px'}} className='blog-content'>
          <p><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i><strong>Importante</strong></p>
          <p>En pocos minutos llegará la herramienta a tu email. Si no la encuentras en la bandeja de entrada principal revisa en las carpetas secundarias y por último en correos no deseados.</p>
          <img style={{textAlign: 'center', width: '100%'}} alt="sperto" src={require('../images/email.png')} />
        </div>
      </div>
    </div>
    )
  }
} 

export default GetInterestToolGracias