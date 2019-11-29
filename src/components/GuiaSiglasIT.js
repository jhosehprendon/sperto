import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class GuiaSiglasIT extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 5, 10).then(() => {
        this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  // renderSpinner = () => {
  //   if(this.state.tryCreate) {
  //     return (
  //       <div style ={{margin: 'auto'}} class="ui active centered inline loader"></div>
  //     )
  //   } else {
  //     return null
  //   }
  // }

  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Guía GRATIS</h3>
            <h2 className='rmk-first__title'>Las Siglas IT que todo Reclutador debe Conocer Antes de Postular una Vacante</h2>
            <h3 className='rmk-first__subtitle'>Adquiere conocimiento y vocabulario tecnológico que te va a permitir encontrar candidatos de calidad, expresarte con confianza y evaluarlos de forma efectiva.</h3>
            <LeadForm
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía'
              loading={this.state.tryCreate}
              message= {this.props.error}
            />
          </div>
          {/* <p style={{marginTop: '3px', color: 'red'}}>{this.props.error}</p> */}
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

export default connect(mapStateToProps, {createContact})(GuiaSiglasIT)