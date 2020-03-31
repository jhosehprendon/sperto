import React from 'react';

class JobsNewsLetterGracias extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='blog-block'>
        <div className='blog-content'>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '40px', textAlign: 'center'}}>Ya estas registrado!</h2>
            <p>Nos vemos todos los dias con tips, oportunidades y nueva información :)</p>
            <p>Por favor revisa tu bandeja de entrada y verifica si el email llegó a correos no deseados</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default JobsNewsLetterGracias