import React from 'react';
import history from '../history';

class GuiaEsquemaGoogleGracias extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToConsulta = () => {
    history.push('/consulta')
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
          <div style={{fontSize: '25px', marginTop: '50px'}}>
            <p>Al descargar esta guía haz dado el primer paso para mejorar tu proceso de reclutamiento.</p>
            <p>Se que quieres contratar más desarrolladores de calidad...Y eso es lo que pasará si comienzas a aplicar buenas prácticas de marketing digital.</p>
            <p>Con este esquema de marketing vas a poder entender cada uno de los perfiles de candidatos, vas a saber en que plataformas encontrarlos y que mensaje usar para atraer su atención.</p>
            <p><strong>Pero dejame hacerte una pregunta...</strong></p>
            <p>Ahora que conoces el esquema que usa Google, y que sabes como identificar los diferentes perfiles en candidatos...¿Te gustaría saber las tácticas que puedes implementar para acercarte a candidatos activos y pasivos para llenar más vacantes?</p>
            <p><strong>Ahora, la siguiente Oferta NO es para todos...</strong></p>
            <p>Te ofrezco esta oportunidad porque haz mostrado interés en el esquema usado por Google.</p>
            <p>Entonces voy a ha hacerte una oferta especial.</p>
            <p>Esto va ayudarte a conseguir más candidatos de calidad en menor tiempo...Vas a poder cubrir más vacantes y cumplir con los objetivos de tu empresa.</p>
            <p>Te invito a agendar una llamada conmigo de 15 minutos donde vamos a conversar sobre tus objetivos y de los retos que enfrentan tus reclutadores.</p>
            <p>Con esta información vamos a diseñar un proceso de entrenamiento personalizado que le va a dar todas las herramientas y el conocimiento necesario para que cumplan con las metas.</p>
            <p>Haz Click en el botón para conocer más.</p>
          </div>
        </div>
        <div style={{textAlign: 'center', marginBottom: '20px', marginTop: '-50px'}}>
          <button onClick={this.sendToConsulta} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Ver Más</button>
        </div>
      </div>
    )
  }
} 

export default GuiaEsquemaGoogleGracias