import React from 'react';

class CallInvite extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/30min"
  }

  sendToInterestTraining = () => {
    window.open('/interest-training', '_blank');
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div className='consulta-title'>
            <h1>Espera! Te Falta un Paso</h1>
          </div>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <h2>Ya tienes Acceso a Herramientas muy Importantes.</h2>
            <h2>Pero es Necesario tener un Plan de Marketing Ajustado a tu Negocio y tus Objetivos.</h2>
          </div>
          <div style={{fontSize: '25px', color: '#283d54', marginTop: '-35px'}} className='blog-content'>
            <p>Ahora Puedes Agendar una Llamada de Consultoría Gratis Conmigo donde Revisaré tu Estrategia.</p>
            <p>...Y te guiaré en el proceso de creación de un sistema que genere clientes de forma automática.</p>
            <p>Haz click abajo, elige el dia y la hora que más te convenga.</p>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: '-50px'}}>
          <div style={{textAlign: 'center'}}>
            <button onClick={this.sendCalendly} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px', fontSize: '24px' }} className="btn btn-lg btn-success">Agendar Llamada Gratis</button>
          </div>
          <div style={{textAlign: 'center'}}>
            <button onClick={this.sendToInterestTraining} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-lg btn-danger">No Gracias, llévame al entrenamiento que he pagado</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default CallInvite