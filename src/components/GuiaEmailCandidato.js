import React from 'react';
import '../css/Sequence.css'

class GuiaEmailCandidato extends React.Component {

  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Guía GRATIS</h3>
            <h2 className='rmk-first__title'>Cómo obtener Emails de Candidatos Calificados por Linkedin, Github y Facebook</h2>
            <h3 className='rmk-first__subtitle'>¡Incluyendo aquellos que no estan en búqueda activa!</h3>
            <form style={{marginTop: '30px'}}>
              <div>
                <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'name')} placeholder="Nombre"></input>
              </div>
              <div>
                <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'email')} placeholder="Email"></input>
              </div>
            </form>
            <p style={{color: 'white', marginTop: '5px'}}>{this.props.error}</p>
            <button onClick={() => this.sendClientLeadInfo(this.state.clientData)} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Descargar Guía</button>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/cover-guia.jpg')} />
          </div>
        </div>
      </div>
    )
  }
} 


export default GuiaEmailCandidato
