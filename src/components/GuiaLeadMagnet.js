import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class GuiaLeadMagnet extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    if(formValues.leadType === 'manager') {
      this.props.createContact(formValues, 8, 13).then(() => {
          this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    } else {
      // this.props.createContact(formValues, 7, 9).then(() => {
      //   this.setState({tryCreate: false})
      // }).catch(e => {
      //   this.setState({tryCreate: false})
      // })
    }
  }

  render() {
    return (
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso GRATIS a Guía</h3>
            <h2 className='rmk-first__title'>La Fórmula Perfecta de un Lead Magnet Ganador</h2>
            <h3 className='rmk-first__subtitle'>Construye una Audiencia, Vende más y Acelera el Crecimiento de tu Negocio. El Lead Magnet es:</h3>
            <ul>
              <li className='rmk-first__subtitle'>Una de las herramientas más importantes del marketing</li>
              <li className='rmk-first__subtitle'>Te permite tener el primer punto de contacto con tu audiencia</li>
            </ul>
            <LeadForm
              from='leadMagnet'
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía'
              loading={this.state.tryCreate}
              message= {this.props.error}
            />
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/lead_magnet_portada.jpg')} />
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

export default connect(mapStateToProps, {createContact})(GuiaLeadMagnet)