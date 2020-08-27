import React from 'react';
import { connect } from 'react-redux';
import LeadForm from '../LeadForm';
import { createContact } from '../../store/actions';
import '../../css/Sequence.css'

class RegisterMiniClass extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 25, 26).then(() => {
      this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return (
      <div className='rmk-first--flex over' style={{display: 'flex'}}>
        <div style={{marginRight: '10%'}}>
          <h3 className='rmk-first__subtitle' style={{ fontWeight: 'bold', color: '#304057'}}>Acceso a Mini Curso GRATIS (3 Videos, 3 Dias)</h3>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>Aprende cómo Crear Camapañas en Facebook e Instagram que Generan Ganancias</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057', marginTop: '-2px'}}>Construye un Negocio Rentable y Exitoso</h3>
          <h3 className='rmk-first__subtitle' style={{color: '#304057'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Sin Desperdiciar Dinero en el Intento</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Conoce el sistema que usan las empresas exitosas</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Estructura de una campaña efectiva (Tips)</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Vende más y acelera el crecimiento de tu negocio</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Obtén resultados sin malgastar tu dinero</li>
          </ul>
          <LeadForm
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Acceder al curso'
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

export default connect(mapStateToProps, {createContact})(RegisterMiniClass)