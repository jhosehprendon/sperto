import React from 'react';

class Consulta extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return ( 
      <div>
          <div style={{margin: '12% 0 12% 0'}}>
            <h1 className='nosotros-banner'><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i> We are breaking the rules of Social Media Advertising by building efficient technology and providing the best customer experience <i className="fas fa-quote-right" style={{ color: '#f2c924'}}></i></h1>
          </div>
          <div className='nosotros-block'>
            <div className='nosotros-intro-main'>
              <div className='nosotros-intro'>
                <p style={{fontSize: '20px', color: '#f2c924', fontWeight: 'bold'}}>Sobre Nosotros</p>
                <h2 style={{fontSize: '35px'}}>Sperto Media is a start-up created by social media advertising specialists.</h2>
              </div>      
            </div>
            <div className='nosotros-story'>
              <div style={{textAlign: 'center'}}>
                <img style={{height: '140px', width: '140px', borderRadius: '50%', objectFit: 'cover'}} alt="jhosehp" src={require('../images/jhosehp.jpg')} />
              </div>
              <div style={{marginTop: '20px'}}>
                <h3>Hola, mi nombre es Jhosehp Rendón fundador de Spertomedia. Quiero compartir contigo información de valor que va a tener impacto positivo en tu proceso de reclutamiento y en el crecimiento de tu empresa.</h3>
                <h3>Si haz llegado hasta acá, es porque estas interesado en impulsar tu negocio con estrategias de marketing efectivas o porque quieres mejorar el proceso que actualmente estas implementando. </h3>
                <h3>Estas en el lugar correcto!</h3>
                <h3>Actualmente nos encontramos en un ecosistema muy competitivo que demanda innovación para marcar la diferencia y posicionarnos en el mercado como líderes. El marketing digital puede darnos resultados increíbles si se ejecuta con la estrategia apropiada. </h3>
                <h3>He visto como las empresas no lo hacen correctamente y desperdician dinero sin conseguir los resultados esperados. Intentan venderle una vacante a un candidato sin haber creado una relación previa. Un cambio de carrera es una decision importante, se requiere de mayor información antes de tomar una decisión, por lo tanto aquellas empresas que crean relaciones son las que ganan en un ambiente tan competitivo.</h3>
                <h3>He creado Spertomedia con la intención de compartir todo el conocimiento que he adquirido en los últimos 6 años de haber trabajado con empresas de distintas industrias. He tenido la oportunidad de trabajar y aprender de las grandes mentes del marketing digital, dónde he podido ejecutar estrategias efectivas para empresas de tecnología, e-commerce, lead generation, real estate y e-learning.</h3>
                <h3>Nuestro mindset es: “Ofrecer valor antes de pedir algo a cambio”. </h3>
                <h3>Con una estrategia de embudo de marketing vamos a poder diseñar un sistema automatizado que te va a permitir conectar con candidatos potenciales.</h3>
                <h3>Si actualmente estas enviando mensajes invadidos por LinkedIn, vas a pensar distinto luego de trabajar con nosotros. Créeme que esos mensajes lo único que hacen es molestar al candidato, lo he vivido como programador y lo he evidenciado de muchos colegas que sienten el mismo acoso de los reclutadores.</h3>
                <h3>Juntos, vamos a diseñar y ejecutar una estrategia de marketing digital que funcione para tu negocio, en donde vamos a enviar tráfico a una etapa inicial de “Awareness”, luego de “Consideration”, “Decision” y finalmente “Advocacy”</h3>
              </div>
            </div>
          </div>
        </div>
    )
  }
} 

export default Consulta