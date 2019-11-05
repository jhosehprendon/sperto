import React from 'react';
import '../css/Sequence.css'

class MiniCursoRegistro extends React.Component {

  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Mini Curso GRATIS</h3>
            <h2 className='rmk-first__title'>Marketing Digital y Facebook Ads para Reclutadores IT</h2>
            <form style={{marginTop: '30px'}}>
              <div>
                <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'name')} placeholder="Nombre"></input>
              </div>
              <div>
                <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'email')} placeholder="Email"></input>
              </div>
            </form>
            <p style={{color: 'white', marginTop: '5px'}}>{this.props.error}</p>
            <button onClick={() => this.sendClientLeadInfo(this.state.clientData)} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Acceder al Mini Curso</button>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/mini-curso.png')} />
          </div>
        </div>
      </div>
    )
  }
} 


export default MiniCursoRegistro