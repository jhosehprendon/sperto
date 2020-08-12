import React from 'react';

class CallInviteFitness extends React.Component {

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
          <div className='consulta-title'>
            <h1>Espera! Te Falta un Paso</h1>
          </div>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <h2>Debes agendar dia y hora de tu Entrenamiento.</h2>
          </div>
          <div style={{fontSize: '25px', color: '#283d54', marginTop: '-60px'}} className='blog-content'>
            <p>Haz click abajo, elige el dia y la hora que más te convenga.</p>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: '-50px'}}>
          <div style={{textAlign: 'center'}}>
            <button onClick={this.sendCalendly} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px', fontSize: '24px' }} className="btn btn-lg btn-success">Agendar Entrenamiento</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default CallInviteFitness