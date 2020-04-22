import React from 'react';
import '../../css/Blog.css';
import history from '../../history';

class ArticuloRealidad extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToLeadMagnet = () => {
    history.push('/guia-lead-magnet')
  }
  
  render() {
    return ( 
      <div>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../../images/ice-cream.jpg')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>La Realidad del Marketing que debes conocer</h1>
          <h3 className="blog-date">Published on March 17, 2020</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Cuesta creer que el 80% de los negocios fracasan en los primero 8 meses, pero es una dura realidad que enfrentan los emprendedores en cualquier parte del mundo.</p>
            <p>Emprender un nuevo proyecto no es tarea fácil, conocemos los riesgos que existen, pero lo más sorprendente es saber que la causa principal está relacionada con el marketing mal ejecutado.</p>
            <p>Entonces, por qué no dedicamos tiempo para conocer más sobre las buenas prácticas de marketing?</p>
            <div style={{border: '1px solid grey', padding: '20px', textAlign: 'center', marginBottom: '20px', fontWeight: 'bold'}}>
              <p>Da el primer paso para hacer buen Marketing</p>
              <p>Conoce cómo crear y usar la herramienta más importante</p>
              <button onClick={this.sendToLeadMagnet} type="button" style={{marginBottom: '10px', fontWeight: 'bold', padding: '12px', fontSize: '16px' }} className="btn btn-success">Ver más</button>
            </div>
            <p>Si conoces más sobre el marketing y sabes ejecutar estrategias efectivas, puedes aumentar las probabilidades de que tu negocio no sea parte de las estadísticas. Además, tendrás un negocio que vende más, es rentable y crece exponencialmente.</p>
            <p>En este artículo te voy a explicar qué están haciendo los negocios mal y que enfoque puedes tomar para evitar caer en la misma trampa y obtener resultados. 
            Este enfoque funciona en empresas grandes, startups, pequeños emprendimientos, y de seguro funcionará en tu negocio.</p>

            <p>Si eres el dueño del negocio o si estás a cargo del marketing, definitivamente debes saber esto.</p>            
            <p>Cuando hablamos de negocios digitales, la mayoría de las empresas usan las plataformas de publicidad (Facebook, Instagram, Youtube, etc) para bombardear a la audiencia con su producto o servicio. En sus mensajes muestran desespero al pedir que compren una y otra vez. Hablan de su producto, sobre lo bueno que es pero nunca prestan atención a lo que realmente quiere su audiencia, no conocen sus problemas y deseos.</p>
            <p>Ese es el gran problema! A eso me refiero con marketing mal ejecutado.</p>
            <p>Nadie se pasea por Facebook con la tarjeta de crédito en la mano listo para comprar. Por lo contrario, los usuarios digitales quieren entretenerse, educarse, ser sorprendidos.
            La clave del éxito está en crear una relación con una audiencia que te escuche, confíe en  tu marca y este dispuesta a comprar cuando este lista.</p>
            <p>Lo primero que viene a mi mente cuando hablamos de construir una relación, es DAR.</p>
            <p>Sí, dar lo mejor de mi para hacer sentir bien a otra persona. Esto es muy normal cuando iniciamos una relación con cualquier persona.</p>
            <p>Dar es un concepto que aplica tanto para las relaciones humanas, como para el Marketing en todos sus niveles.</p>
            <p>Seas un B2B (direccionado a negocios) o B2C (al cliente), detrás de cada negocio hay una persona con intereses, preocupaciones y deseos. Por eso debes enfocar tu marketing de una forma amigable y cercana.</p>
            <p>Cuando hablo de Dar en Marketing, me refiero a crear una audiencia a través de contenido que está relacionado a tu producto o servicio, pero sin el pitch de vender. Muchas empresas están cometiendo el error de vender directamente a una audiencia en frío. De esa manera gastan dinero sin obtener resultados.</p>
            <p>Para crear contenido de valor, es importante que conozcas a tu potencial cliente, así podrás comunicarte en el mismo lenguaje y hablar justo de lo que necesita.</p>
            <p>Con la absurda cantidad de información accesible y publicidad online, debes dar información interesante, realmente útil, para ser notado y lograr el interés de tu audiencia.</p>
            <p>Te doy el ejemplo de una empresa en la industria financiera que lo está haciendo correctamente.</p>
            <p>Ellos han identificado que sus clientes tienen problemas para pagar sus deudas. Además, tienen la fórmula para que sus clientes puedan organizar sus finanzas y ser libres de deudas.</p>
            <p>Entonces, han decidido compartir pasos prácticos para que sus potenciales clientes puedan pagar sus deudas y mejorar la administración de sus ingresos.</p>
            <p>Para una persona que lleva tiempo ahogada en deudas, llena de estrés y preocupación, esta información le será realmente útil y seguramente lo van a apreciar. 
            Si estos logran mejorar su estado financiero, pagan poco a poco sus deudas, ganarán un prospecto agradecido e interesado.</p>
            <p>Las empresas que se preocupan por sus clientes, crean audiencias fieles a su marca. Que posteriormente se convierten en clientes que compran una y otra vez. 
            Lo maravilloso de crear una audiencia es que no necesitas mucho dinero. Con creatividad y dedicación puedes generar contenido de valor y relevante que te permitirá construir una estrecha relación con tu prospecto. El esfuerzo de tiempo y dedicación se verán multiplicados en tus ganancias.</p>
            <p>Es muy probable que ya tengas una audiencia en Facebook o Instagram y eso está muy bien, pero tu enfoque debe ser más ambicioso. Con las redes sociales no tienes un completo control de tu audiencia, las redes sociales están en constante cambio y esos contactos no te pertenecen.</p>
            <p>Si quieres ser dueño de tu propia audiencia, tu objetivo debe ser crear un email list. Una lista de contactos de tus potenciales clientes.</p>
            <p>El primer paso para cumplir con esta metodología, es crear un Lead Magnet. Un Lead Magnet es una pieza de contenido que ofreces gratis a cambio de información de contacto como su dirección de email.</p>
            <p>Si quieres saber la fórmula perfecta para crear un Lead Magnet ganador haz click aquí >> <a href="https://www.spertomedia.com/guia-lead-magnet">Lead Magnet</a></p>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloRealidad