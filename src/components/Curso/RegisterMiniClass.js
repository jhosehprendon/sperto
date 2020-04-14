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

    this.props.createContact(formValues, 12, 16).then(() => {
      this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return (
      <div className='rmk-first--flex over' style={{display: 'flex'}}>
        <div style={{marginRight: '10%'}}>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>Conviértete en Digital Marketer, Trabaja desde Casa, Emprende y Aumenta tus Ingresos</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057', width: '85%'}}>Conoce cómo comenzar con este mini curso</h3>
          <LeadForm
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Regístrate Gratis'
            loading={this.state.tryCreate}
            message= {this.props.error}
            askManager={false}
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