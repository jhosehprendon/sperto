import React from 'react';

class CallInviteAgencia extends React.Component {

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
        </div>
        <div style={{textAlign: "center"}}>
          <div style={{textAlign: 'center'}}>
            <button onClick={this.sendCalendly} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px', fontSize: '24px' }} className="btn btn-lg btn-success">Agenda tu Clase Aquí</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default CallInviteAgencia