import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css';


class GuiaSistema extends React.Component {

  state = {
    tryCreate: false
  }

  // sendToForm() {
  //   window.location.href = "https://jhosehprendon.activehosted.com/f/4"
  // }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues).then(() => {
        this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Guía GRATIS</h3>
            <h2 className='rmk-first__title'>Cubre más Vacantes con el Sistema Automático de Generación de Candidatos</h2>
            <h3 className='rmk-first__subtitle'>Inicia tu Día con el Calendario lleno de Entrevistas Programadas</h3>
            <LeadForm 
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía' 
              loading={this.state.tryCreate}
              askManager={true}
            />
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/cover-sistema.png')} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.contact.error
  }
}

export default connect(mapStateToProps, {createContact})(GuiaSistema)