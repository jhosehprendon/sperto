import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class GuiaMaximizador extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    if(formValues.leadType === 'manager') {
      this.props.createContact(formValues, 6, 9).then(() => {
          this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    } else {
      this.props.createContact(formValues, 7, 9).then(() => {
        this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    }
  }

  render() {
    return (
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso GRATIS a Guía</h3>
            <h2 className='rmk-first__title'>3 Medidas que Debes Tomar para Maximizar tus Ganancias en Facebook Ads y Acelerar el Crecimiento de tu Negocio</h2>
            <h3 className='rmk-first__subtitle'>Cada vez es más difícil mantener los costos bajos y un buen volumen de conversiones en Facebook e Instagram.</h3>
            <h3 className='rmk-first__subtitle'>La respuesta está en un <span style={{color: '#FFDE59'}}>Maximizador de Ganancias</span> que nos permite obtener un mayor ingreso de nuestros clientes.</h3>
            <LeadForm
              from='maximizador'
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía'
              loading={this.state.tryCreate}
              message= {this.props.error}
            />
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/maximizador.png')} />
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

export default connect(mapStateToProps, {createContact})(GuiaMaximizador)