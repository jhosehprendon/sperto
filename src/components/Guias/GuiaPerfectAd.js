import React from 'react';
import { connect } from 'react-redux';
import LeadForm from '../LeadForm';
import { createContact } from '../../store/actions';
import '../../css/Sequence.css'

class GuiaPerfectAd extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    if(formValues.leadType === 'manager') {
      this.props.createContact(formValues, 20, 22).then(() => {
          this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    } else {
      this.props.createContact(formValues, 21, 22).then(() => {
        this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    }
  }

  render() {
    return (
      <div className='rmk-first--flex over' style={{display: 'flex'}}>
        <div style={{marginRight: '10%'}}>
          <h3 className='rmk-first__subtitle' style={{ fontWeight: 'bold', color: '#304057'}}>Acceso GRATIS</h3>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>GUIA Paso a Paso para crear Anuncios en Facebook e Instagram que Generan Ventas y Retornos Positivos</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>SIN DESPERDICIAR TU DINERO EN EL INTENTO</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Conoce la fórmula que usan los negocios exitosos</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Consigue retornos positivos en tus anuncios</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Vende más y acelera el crecimiento de tu negocio</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Obtén resultados sin malgastar tu dinero</li>
          </ul>
          <LeadForm
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Descargar Guía'
            loading={this.state.tryCreate}
            message= {this.props.error}
            askManager={true}
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

export default connect(mapStateToProps, {createContact})(GuiaPerfectAd)