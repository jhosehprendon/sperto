import React from 'react';
import '../css/Sequence.css'

class GuiaSistema extends React.Component {

  sendToForm() {
    window.location.href = "https://jhosehprendon.activehosted.com/f/4"
  }

  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Guía GRATIS</h3>
            <h2 className='rmk-first__title'>Cubre más Vacantes con el Sistema Automático de Generación de Candidatos</h2>
            <h3 className='rmk-first__subtitle'>Inicia tu Día con el Calendario lleno de Entrevistas Programadas</h3>
            <button onClick={() => this.sendToForm()} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Descargar Guía</button>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/cover-sistema.png')} />
          </div>
        </div>
      </div>
    )
  }
} 


export default GuiaSistema