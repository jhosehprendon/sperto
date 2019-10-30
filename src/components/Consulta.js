import React from 'react';

class Consulta extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/15min"
  }

  render() {
    return ( 
      <div>
          <div style={{textAlign: 'center', color: '#283d54', margin: 'auto', marginTop: '50px'}}>
            <h2>Agenda una llamada Gratis de 15 minutos con Jhosehp</h2>
            <iframe title="cnsulta" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/ocnVgFj36cY" allowfullscreen></iframe>
            <div style={{textAlign: 'center', marginTop: '30px'}}>
              <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
            </div>
            <div>
            <img style={{height: '120px', width: '120px', borderRadius: '50%', objectFit: 'cover', margin: '20px 0 20px 0'}} alt="jhosehp" src={require('../images/jhosehp.jpg')} />
            </div>
            <h3 style={{width: '55%', margin: 'auto', marginBottom: '40px'}}>En esta llamada esperamos conocer sobre tu negocio y sus objetivos para diseñar la mejor estrategia de marketing digital</h3>
          </div>
      </div>
    )
  }
} 

export default Consulta