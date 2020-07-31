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
            <h1 style={{marginTop: '-10px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Pero ESPERA! Esto es Importante</h1>
          </div>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <h2>No Importa si Tienes el Mejor Anuncio... O el más Llamativo.</h2>
            <h2>Si no estas Mostrándolo a la <span style={{color: '#ff5757'}}>Audiencia Indicada</span>... vas a Desperdiciar tu Dinero.</h2>
          </div>
          {/* <div style={{textAlign: 'center', color: '#283d54', marginTop: '-40px'}}>
            <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/hEuCZAYNZng" allowfullscreen></iframe>
          </div> */}
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <p>Para generar ventas y ser rentable en tus anuncios debes conocer el proceso de estudio de audiencias que ejecutan las empresas exitosas...</p>
            <p>...Y tener acceso a las <span style={{color: '#ff5757'}}>Herramientas Secretas</span> que usan.</p>
            <hr></hr>
            <h2>Obtén ...</h2>
            <ul style={{color: '#ff5757'}}>
              <li>Acceso de por Vida a Herramienta de Intereses Ocultos ($80)</li>
              <li>Acceso a Entrenamiento de Estudio de Audiencias ($40)</li>
              <li>Acceso a Template de Intereses ($10)</li>
            </ul>
            <hr></hr>
            <h2 style={{textAlign: 'center'}}>Todos estos Recursos por UN SÓLO pago de $5</h2>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: '-50px'}}>
          <div style={{textAlign: 'center'}}>
            <button onClick={this.sendToPack5} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-lg btn-success">Sí, Quiero mi Herramienta y Entrenamiento ($5)</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default GraciasGuiaPerfectAd