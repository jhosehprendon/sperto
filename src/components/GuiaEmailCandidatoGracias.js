import React from 'react';
import history from '../history';

class GuiaEmailCandidatoGracias extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToSecuenciaVideo1 = () => {
    history.push('/secuencia/video-1')
  }

  
  render() {
    return (
      <div className='blog-block'>
        <div className='blog-content'>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '40px', textAlign: 'center'}}>¡Espera! Hay más...</h2>
            <p>Gracias por descargar la Guía. Te llegará en pocos minutos a tu email.
            <br></br>Si no la haz recibido después de un tiempo, revisa en correos no deseados.</p>
          </div>
          <div style={{fontSize: '25px', marginTop: '40px'}}>
            <p>Al descargar esta guía haz dado el primer paso para mejorar tu proceso de reclutamiento.</p>
            <p>Se que quieres contratar más desarrolladores de calidad...Y eso es lo que pasará si comienzas a aplicar buenas prácticas de marketing digital.</p>
            <p>Con estos métodos vas a poder encontrar emails de desarrolladores decalidad en las platformas que usan diariamente.</p>
            <p><strong>Pero dejame hacerte una pregunta...</strong></p>
            <p>Ahora que puedes tener una lista de emails...¿Qué harás con ella?...¿Enviarias un email directamente con la vacante?...NO lo hagas por favor, es un ERROR.</p>
            <p>¿Qué hacer entonces?</p>
            <p>¿Te gustaría saber las tácticas que puedes implementar para acercarte a ellos de manera efectiva?</p>
            <p><strong>Ahora, la siguiente Oferta NO es para todos...</strong></p>
            <p>Te ofrezco esta oportunidad porque haz mostrado interés en el método para encontrar emails de candidatos que acabas de descargar.</p>
            <p>Entonces voy a ha hacerte una oferta especial.</p>
            <p>Esto va ayudarte a conseguir más candidatos de calidad en menor tiempo...Vas a poder cubrir más vacantes y cumplir con tus metas.</p>
            <p>He preparado una secuencia de videos de Marketing Digital para Reclutadores IT.</p>
            <p>Vas a aprender cómo usar esa lista para comenzar a establecer conversaciones con esos candidatos pasivos y vas a conocer el poder del marketing a través de Facebook.</p>
            <p>Haz Click en el botón para comenzar</p>
          </div>
        </div>
        <div style={{textAlign: 'center', marginBottom: '20px', marginTop: '-50px'}}>
          <button onClick={this.sendToSecuenciaVideo1} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Comenzar Videos</button>
        </div>
      </div>
    )
  }
} 

export default GuiaEmailCandidatoGracias