import React from 'react';

class GuiaEsquemaGoogleGracias extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/15min"
  }
  
  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h2 style={{fontSize: '30px'}}>¡Muy bien! Tu Guía llegará en pocos minutos</h2>
            <h3>Antes de revisar tu email, ve este corto video</h3>
            <iframe title="guiaEmailGracias" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/ocnVgFj36cY" allowfullscreen></iframe>
            <div style={{textAlign: 'center', marginTop: '30px'}}>
              <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default GuiaEsquemaGoogleGracias