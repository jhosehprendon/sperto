import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class GetInterestTool extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    if(formValues.leadType === 'manager') {
      this.props.createContact(formValues, 15, 19).then(() => {
          this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    } else {
      this.props.createContact(formValues, 16, 19).then(() => {
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
          <h3 className='rmk-first__subtitle' style={{ fontWeight: 'bold', color: '#304057'}}>Acceso GRATIS | Herramienta de Audiencias en Facebook e Instagram</h3>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>Accede a Audiencias Inexploradas</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057', marginTop: '-10px'}}>Vende más y Acelera el Crecimiento de tu Negocio</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Encuentra audiencias que son menos competitivas</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Consigue costos de conversiones más bajos</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Domina un mercado que no ha sido descubierto</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Vende más y construye un negocio rentable</li>
          </ul>
          <LeadForm
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Acceder a Herramienta'
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

export default connect(mapStateToProps, {createContact})(GetInterestTool)