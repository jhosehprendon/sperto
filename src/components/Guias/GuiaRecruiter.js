import React from 'react';
import { connect } from 'react-redux';
import LeadForm from '../LeadForm';
import { createContact } from '../../store/actions';
import '../../css/Sequence.css'

class GuiaRecruiter extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 24, 25).then(() => {
      this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return (
      <div className='rmk-first--flex over' style={{display: 'flex'}}>
        <div style={{marginRight: '10%'}}>
          <h3 className='rmk-first__subtitle' style={{ fontWeight: 'bold', color: '#304057'}}>Acceso GRATIS</h3>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>Cómo Conseguir de 5 a 8 Candidatos Calificados a la Semana de Forma Automática</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Sin Perder Tiempo en Mensajes que no Responden</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Conoce el sistema que usan las empresas exitosas</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Llena tu agenda con candidatos de calidad, de forma automatizada</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Cubre más vacantes en menos tiempo</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Construye una base de datos con el mejor talento</li>
          </ul>
          <LeadForm
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Descargar Guía'
            loading={this.state.tryCreate}
            message= {this.props.error}
          />
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

export default connect(mapStateToProps, {createContact})(GuiaRecruiter)