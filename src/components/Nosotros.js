import React from 'react';

class Consulta extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return ( 
      <div>
        <div style={{margin: '12% 0 12% 0'}}>
          <h1 className='nosotros-banner'><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i> Creemos que la mejor manera de ofrecer una vacante es creando relaciones previas a través de procesos de Marketing efectivos <i className="fas fa-quote-right" style={{ color: '#f2c924'}}></i></h1>
        </div>
        <div className=''>
          <div className='nosotros-intro-main nosotros-block'>
            <div className='nosotros-intro'>
              <p style={{fontSize: '20px', color: '#f2c924', fontWeight: 'bold'}}>Sobre Nosotros</p>
              <h2 style={{fontSize: '35px'}}>Sperto Media es una agencia de Marketing destinada a mejorar el proceso de Reclutamiento IT</h2>
            </div>      
          </div>
          <div className='nosotros-story'>
            <div style={{textAlign: 'center'}}>
              <img style={{height: '140px', width: '140px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px'}} alt="jhosehp" src={require('../images/jhosehp.jpg')} />
            </div>
            <hr style={{backgroundColor: '#f2c926', width: '50px', height: '8px', border: 'none'}}></hr>
            <div style={{marginTop: '60px'}}>
              <h3>Hola, soy Jhoseph Rendon fundador de SpertoMedia.</h3>
              <h3>Hace más de 10 años me aventuré en el mundo del emprendimiento y esto me llevó aprender sobre Marketing Digital. En el camino me di cuenta del poder que tiene en cualquier industria cuando se ejecuta una estrategia inteligente.</h3>
              <h3>Como varios emprendimientos invertí tiempo, dinero y aprendí de mis errores. Es mucho lo que me ha quedado en este viaje y lo que sigo aprendiendo.</h3>
              <h3>Hace 3 años aprendí a programar, una vez especializado entré al mercado laboral y he sido contactado por reclutadores multiples veces de una forma un tanto robotizada. Con esta experiencia vi la oportunidad de darle un nuevo enfoque a la industria del reclutamiento, aplicando el conocimiento y experiencia del Marketing Digital.</h3>
              <h3>Sabías que parte del éxito de las entrevistas se determinan por la experiencia del candidato durante el proceso. Lo certifico como candidato, por eso quiero compartir contigo una perspectiva mas amigable donde “Ofrecemos valor, antes de pedir algo a cambio” es nuestro Mindset.</h3>
              <h3>Cuando estes listo, estoy aquí para ayudarte a impulsar tus resultados con el uso adecuado del marketing digital.</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Consulta