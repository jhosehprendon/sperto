import React from 'react';
import '../css/Sequence.css'

class GuiaEsquemaGoogle extends React.Component {

  sendToForm() {
    window.location.href = "https://jhosehprendon.activehosted.com/f/1"
  }

  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Guía GRATIS</h3>
            <h2 className='rmk-first__title'>Conoce el esquema usado por Google para diseñar su estrategia de "Employment Marketing".</h2>
            <h3 className='rmk-first__subtitle'>Con el podrás atraer y conectar con candidatos de calidad para llenar vacantes eficientemente</h3>
            {/* <form style={{marginTop: '30px'}}>
              <div>
                <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'name')} placeholder="Nombre"></input>
              </div>
              <div>
                <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'email')} placeholder="Email"></input>
              </div>
            </form>
            <p style={{color: 'white', marginTop: '5px'}}>{this.props.error}</p> */}
            <button onClick={() => this.sendToForm()} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Descargar Guía</button>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/esquema-google.png')} />
          </div>
        </div>
      </div>
    )
  }
} 


export default GuiaEsquemaGoogle