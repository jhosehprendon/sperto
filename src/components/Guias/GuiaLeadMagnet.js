import React from 'react';
import { connect } from 'react-redux';
import LeadForm from '../LeadForm';
import { createContact } from '../../store/actions';
import '../../css/Sequence.css'

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
      <div className='rmk-first--flex over' style={{display: 'flex'}}>
        <div style={{marginRight: '10%'}}>
          <h3 className='rmk-first__subtitle' style={{ fontWeight: 'bold', color: '#304057'}}>Acceso GRATIS a Guía</h3>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>La Fórmula Perfecta de un Lead Magnet Ganador</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057'}}>Construye una Audiencia, Vende más y Acelera el Crecimiento de tu Negocio.</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Te permite crear un email list de prospectos calificados</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Activa el Sistema de Marketing Inteligente</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Predice tus ventas y el crecimiento de tu negoccio</li>
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
        <div className="cover-guia">
          <img style={{width: '250px'}} alt="sperto" src={require('../../images/lead_magnet.jpg')} />
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