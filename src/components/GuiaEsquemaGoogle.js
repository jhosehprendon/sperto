import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class GuiaEsquemaGoogle extends React.Component {

  state = {
    tryCreate: false
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 1, 2).then(() => {
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

  componentDidMount() {
    console.log(process.env)
  }


  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Guía GRATIS</h3>
            <h2 className='rmk-first__title'>Conoce el esquema usado por Google para diseñar su estrategia de "Employment Marketing".</h2>
            <h3 className='rmk-first__subtitle'>Con el podrás atraer y conectar con candidatos de calidad para llenar vacantes eficientemente</h3>
            <LeadForm 
              onSubmit={this.onSubmit} 
              buttonText='Descargar Guía' 
            />
            {this.renderSpinner()}
            <p style={{marginTop: '3px', color: 'white'}}>{this.props.error}</p>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/esquema-google.png')} />
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

export default connect(mapStateToProps, {createContact})(GuiaEsquemaGoogle)