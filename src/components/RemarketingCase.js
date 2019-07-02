import React from 'react';
import '../css/RemarketingCase.css'
import { connect } from 'react-redux';
import { createClientLead } from '../store/actions';
import history from '../history';

class RemarketingCase extends React.Component {

  state= {
    clientData: {
      name: '',
      email: ''
    }
  }

  sendClientLeadInfo = (formValues) => {
    this.props.createClientLead(formValues).then(() => {
      if(!this.props.error) {
        history.push('/case-remarketing/gracias')
      }
    })
  }

  handleInputChange = (event, value) => {
    this.setState({clientData: {...this.state.clientData, [value]: event.target.value}})
  }

  render() {
    return ( 
      <div>
        <div className='rmk-first'>
          <div className='rmk-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h3 className='rmk-first__subtitle' style={{color: '#29A745', fontWeight: 'bold'}}>Acceso a Caso de Estudio GRATIS</h3>
              <h2 className='rmk-first__title'>Conoce el Secreto del Remarketing en Facebook que pocos conocen y que las Grandes Empresas usan para Vender Millones</h2>
              <h3 className='rmk-first__subtitle'>Caso de Estudio: Cómo un E-commerce de Suplementos pudo generar 90mil dólares adicionales al mes con una campaña de Remarketing</h3>
              <form style={{marginTop: '30px'}}>
                <div>
                  <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'name')} placeholder="Nombre"></input>
                </div>
                <div>
                  <input className="rmk-input" onChange={(e, value) => this.handleInputChange(e, 'email')} placeholder="Email"></input>
                </div>
              </form>
              <p style={{color: 'white', marginTop: '5px'}}>{this.props.error}</p>
              <button onClick={() => this.sendClientLeadInfo(this.state.clientData)} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Acceder a Caso de Estudio</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
      error: state.client.error
  } 
}

export default connect(mapStateToProps, { createClientLead })(RemarketingCase)
