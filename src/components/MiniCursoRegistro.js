import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class MiniCursoRegistro extends React.Component {

  state = {
    tryCreate: false
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 4, 6).then(() => {
        this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  renderSpinner = () => {
    if(this.state.tryCreate) {
      return (
        <div style ={{marginTop: '10px'}} class="ui active centered inline loader"></div>
      )
    } else {
      return null
    }
  }

  render() {
    return ( 
      <div className='mini-curso-registro'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Mini Curso GRATIS</h3>
            <h2 className='rmk-first__title'>Marketing Digital y Facebook Ads para Reclutadores IT</h2>
            <p style={{color: 'white', fontSize: '20px'}}>Si haz decidido ver este curso, es porque probablemente tienes problemas para encontrar candidatos de calidad. Quizas te cuesta recibir respuestas a tus ofertas, en ocaciones comienzas el proceso con un candidato pero al final acepta otra oferta. O simplemente buscas mejorar tu proceso de reclutamiento.</p>
            <p style={{color: 'white', fontSize: '20px'}}>Conoce como el Marketing Digital puede ayudarte a cumplir con tus objetivos.</p>
            <LeadForm 
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía' 
            />
            {this.renderSpinner()}
            <p style={{marginTop: '3px', color: 'white'}}>{this.props.error}</p>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/mini-curso.png')} />
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

export default connect(mapStateToProps, {createContact})(MiniCursoRegistro)