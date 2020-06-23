import React from 'react';
import { connect } from 'react-redux';
import LeadForm from '../LeadForm';
import { createContact } from '../../store/actions';
// import '../css/Sequence.css'

class GuiaPlan extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    if(formValues.leadType === 'manager') {
      this.props.createContact(formValues, 13, 17).then(() => {
          this.setState({tryCreate: false})
      }).catch(e => {
        this.setState({tryCreate: false})
      })
    } else {
      this.props.createContact(formValues, 14, 18).then(() => {
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
          <h3 className='rmk-first__subtitle' style={{ fontWeight: 'bold', color: '#304057'}}>Acceso GRATIS a Guía</h3>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>Plan de Marketing Digital Inteligente</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057', marginTop: '-10px'}}>Vende más y Acelera el Crecimiento de tu Negocio</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Construye una máquina predecible de ingresos y retornos positivos</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Evita malgastar tu dinero y tiempo en tácticas que no funcionan</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Conoce los elementos de un plan de marketing ganador</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Pon en marcha un plan robusto y sustentable</li>
          </ul>
          <LeadForm
            from='guiaPlan'
            onSubmit={this.onSubmit} 
            buttonText='Acceder a Guía'
            loading={this.state.tryCreate}
            message= {this.props.error}
            askManager={true}
          />
        </div>
        <div className="cover-guia">
          <img style={{width: '250px'}} alt="sperto" src={require('../../images/guia_plan.png')} />
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

export default connect(mapStateToProps, {createContact})(GuiaPlan)