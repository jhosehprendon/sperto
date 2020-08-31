import React from 'react';

class GraciasGuiaPerfectAd extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToPack5 = () => {
    window.location.href = "https://www.spertomedia.com/checkout/pack-5"
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div className='consulta-title'>
            <h1>Tu Guía está en camino</h1>
            <h1 style={{marginTop: '-10px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Pero ESPERA!</h1>
            <h1 style={{marginTop: '-10px'}}>Esto es Importante</h1>

          </div>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <p>Tienes en tus manos una Guía Valiosa. Pero No Importa si Tienes el Mejor Anuncio... O el más Llamativo.</p>
            <p>Si no estas Mostrándolo a la <span style={{color: '#ff5757'}}>Audiencia Indicada</span> o <span style={{color: '#ff5757'}}>No tienes la Estrategia Adecuada</span>... vas a Desperdiciar tu Dinero.</p>
            <p>Puedo Revisar tu Estrategia y Campañas para Mejorarlas.</p>
            <p>No importa si llevas tiempo probando tus anuncios, o si estas planificando lanzar tu nuevo negocio. Puedo Ayudarte!</p>
            <p>Agenda una Llamada de Consuloría conmigo por sólo:</p>
            <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$5</h2>
            <p style={{ fontSize: '20px' }}>Luego de hacer el pago vas a poder agendar la llamada el dia y la hora que prefieras.</p>
          </div>
          {/* <div style={{fontSize: '25px', color: '#283d54', marginTop: '-35px'}} className='blog-content'>
            <p>Para generar ventas y ser rentable en tus anuncios debes conocer el proceso de estudio de audiencias que ejecutan las empresas exitosas...</p>
            <p>...Y tener acceso a las <span style={{color: '#ff5757', fontWeight: 'bold'}}>Herramientas Secretas</span> que usan.</p>
            <hr></hr>
            <h2>Obtén ...</h2>
            <ul style={{color: '#ff5757'}}>
              <li>Acceso de por Vida a Herramienta de Intereses Ocultos <span style={{textDecoration: 'line-through'}}>($80)</span></li>
              <li>Acceso a Entrenamiento de Estudio de Audiencias <span style={{textDecoration: 'line-through'}}>($40)</span></li>
              <li>Consultoría Personalizada (Llamada 30min)<span style={{textDecoration: 'line-through'}}>($50)</span></li>
              <li>Acceso a Template de Intereses <span style={{textDecoration: 'line-through'}}>($10)</span></li>
            </ul>
            <hr></hr>
            <h2 style={{textAlign: 'center', marginBottom: '-20px'}}>Todo por UN SÓLO pago de:</h2>
            <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$5</h2>
          </div> */}
        </div>
        <div style={{textAlign: "center", marginTop: '-50px'}} className='blog-content'>
          <div id="paypal-button-pack-5" style={{textAlign: 'center', marginTop: '5px'}}></div>
          <div style={{fontSize: '14px', textAlign: 'center'}}>
            <p>Si tienes problemas para completar el pago escríbenos a:</p>
            <p style={{marginTop: '-10px'}}>jhosehp@spertomedia.com</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default GraciasGuiaPerfectAd