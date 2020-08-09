import React from 'react';

class FivePackSalesPage extends React.Component {

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
            <h1>Secreto #2: La Audiencia Perfecta</h1>
          </div>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <h2>No Importa si Tienes el Mejor Anuncio... O el más Llamativo.</h2>
            <h2>Si no estas Mostrándolo a la <span style={{color: '#ff5757'}}>Audiencia Indicada</span>... vas a Desperdiciar tu Dinero.</h2>
          </div>
          <div style={{fontSize: '25px', color: '#283d54', marginTop: '-35px'}} className='blog-content'>
            <p>Para generar ventas y ser rentable en tus anuncios debes conocer el proceso de estudio de audiencias que ejecutan las empresas exitosas...</p>
            <p>...Y tener acceso a las <span style={{color: '#ff5757', fontWeight: 'bold'}}>Herramientas Secretas</span> que usan.</p>
            <hr></hr>
            <h2>Obtén ...</h2>
            <ul style={{color: '#ff5757'}}>
              <li>Acceso de por Vida a Herramienta de Intereses Ocultos <span style={{textDecoration: 'line-through'}}>($80)</span></li>
              <li>Acceso a Entrenamiento de Estudio de Audiencias <span style={{textDecoration: 'line-through'}}>($40)</span></li>
              <li>Acceso a Template de Intereses <span style={{textDecoration: 'line-through'}}>($10)</span></li>
            </ul>
            <hr></hr>
            <h2 style={{textAlign: 'center'}}>Todos estos Recursos por UN SÓLO pago de <span style={{color: '#00b300', fontSize: '30px'}}> &#62;&#62; $5 &#60;&#60;</span></h2>
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

export default FivePackSalesPage