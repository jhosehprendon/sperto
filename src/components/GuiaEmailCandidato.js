import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class GuiaEmailCandidato extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // sendToForm() {
  //   window.location.href = "https://jhosehprendon.activehosted.com/f/2"
  // }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 2, 5).then(() => {
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
            <h2 className='rmk-first__title'>Cómo obtener Emails de Candidatos Calificados por Linkedin, Github y Facebook</h2>
            <h3 className='rmk-first__subtitle'>¡Incluyendo aquellos que no estan en búqueda activa!</h3>
            <LeadForm 
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía'
              loading={this.state.tryCreate}
              message= {this.props.error}
            />
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/cover-guia.jpg')} />
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

export default connect(mapStateToProps, {createContact})(GuiaEmailCandidato)