import React from 'react';

class Consulta extends React.Component {

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
        <h1 className='consulta-title'>Acelera el Crecimiento de tu Negocio con un Sistema de Marketing Inteligente, Facebook e Instagram Ads</h1>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
        </div>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>Si estás gastando dinero en Marketing pero no aumentas tus ventas... si Facebook o Instagram ya no son rentables y temes que tu negocio no pueda sostenerse por más tiempo... Entonces este mensaje es para ti.</p>
          <p>O... Si planeas lanzar un nuevo proyecto o producto... Este mensaje también es para ti.</p>
          <p>El "Sistema Inteligente de Marketing” es lo que tu negocio necesita para conseguir más clientes a través de Facebook e Instagram Ads. Podrás aumentar tus ventas, ser más rentable y crecer tu negocio de forma predecible.</p>
          <p>Pero debes saber que si no decides mejorar tu estrategia de marketing, nada cambiará. Seguirás perdiendo dinero en publicidad sin generar resultados para tu negocio.</p>
          <p>Lo que hace la mayoría cuando Facebook deja de funcionar y los costos aumentan, es probar nuevas imágenes/videos, nuevas audiencias, diferentes ángulos en el mensaje en la publicidad en Facebook e Instagram… O en algunos casos deciden contratar una nueva agencia de marketing. Pero para la mayoría el problema persiste:</p>
          <ul>
              <li>Altos costos por lead o ventas</li>
              <li>Bajo volumen de conversiones</li>
              <li>Literalmente, dinero tirado en marketing sin resultados positivos</li>
              <li>Lo que se traduce en objetivo no cumplidos para la empresa</li>
          </ul>
          <br></br>
          <p>¿Y qué pasa si no haces nada? ¿Si te mantienes haciendo lo mismo?.</p>
          <p>Pierdes dinero en recursos sin obtener resultados... El futuro de tu empresa está cada vez más nublado.</p>
          <p>El problema es más estratégico que táctico. Podrás mejorar un poco con algunos cambios en Facebook pero el problema volverá…</p>
          <h2>Hemos encontrado cómo las empresas pueden generar más conversiones a traves de Facebook e Instagram Ads.</h2>
          <p>Existe una fórmula que funciona y aquí te cuento la historia:</p>
          <p>Durante 6 años ayudé numerosas empresas a ejecutar su publicidad paga por Facebook e Instagram. En la mayoría de los casos logré buenos resultados, pero en otros casos la historia era otra. No importaba lo que hiciera con las campañas: cambio de enfoque, imágenes, videos, audiencias. No lograba mejorar los resultados. Fue realmente frustrante, por eso te entiendo.</p>
          <p>Pero eso me dio la determinación para mejorar la forma en que hacía Marketing, entre muchas horas de lectura, cursos de líderes en marketing y mi reflexión, me llevó a aplicar un sistema que permite potenciar las ventas de cualquier negocio , lo llamo "Sistema Inteligente de Marketing”, su Filosofía es usada por empresas y marketers exitosos para predecir los resultados y sacar el mayor provecho del marketing.</p>
          <p>Este sistema tiene el objetivo principal de crear una relación con el prospecto antes de vender, porque no importa cuanto intentes vender a una audiencia en frío, difícilmente tendras resultados duraderos.</p>
          <p>Pero, luego de poner en práctica el <strong>Sistema de Marketing Inteligente</strong> todos mis esfuerzos comenzaron a tener resultados positivos…Las ventas aumentaron exponencialmente y mis clientes comenzaron a ser rentables...</p>
          <p>El Sistema funcionó en mis clientes y también funcionará en tu Negocio.</p>
          <p><strong>Finalmente, ¡Es tu turno!</strong></p>
          <p>Cuando pongas en práctica el <strong>Sistema de Marketing Inteligente</strong> vas a poder:</p>
          <ul>
            <li>Bajar los costos y generar más conversiones</li>
            <li>Incrementar tus ventas de manera predecible y sustentable</li>
            <li>Crear una comunidad de clientes fieles a tu marca</li>
          </ul>
          <p><strong>¡Es el momento de tomar una decisión!</strong></p>
          <p>Puedes seguir haciendo lo que has venido haciendo, pero ya sabes que resultados vas a obtener.</p>
          <p>Pregúntate si es realmente lo que quieres lograr.</p>
          <p>Entonces, “Haz algo diferente, y obtendrás un resultado diferente”. Finalmente comienza a ser rentable y a hacer crecer tu Negocio.</p>
          <p>Esto es lo que tienes que hacer:</p>
          <p>Haz Click en el botón de abajo para agendar una llamada Gratis de 30 min conmigo. En esta llamada evaluaremos oportunidades, mejoras y planificaremos la ejecución del Sistema de Marketing Inteligente.</p>
        </div>
      </div>
      <div style={{textAlign: "center", marginTop: '6%'}}>
        <hr style={{width: '30%', backgroundColor: '#f2c924'}}></hr>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
        </div>
      </div>
    </div>
    )
  }
} 

export default Consulta