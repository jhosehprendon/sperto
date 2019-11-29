import React from 'react';

class GuiaSiglasITGracias extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='blog-block'>
        <div className='blog-content'>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '40px'}}>¡Espera! Hay más...</h2>
            <p>Gracias por descargar la Guía. Te llegará en pocos minutos a tu email.
            <br></br>Si no la haz recibido después de un tiempo, revisa en correos no deseados.</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default GuiaSiglasITGracias