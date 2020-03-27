import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';
import '../css/Sequence.css'

class JobsNewsLetter extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 9, 15).then(() => {
      this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return (
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h2 className='rmk-first__title' style={{color: '#304057'}}>Entérate de Oportunidades de Teletrabajo</h2>
            <h3 className='rmk-first__subtitle' style={{color: '#304057', width: '85%'}}>Te notificamos a diario de nuevas vacantes y te enseñamos todo lo que debes hacer para comenzar a trabajar desde casa</h3>
            <LeadForm
              from='leadMagnet'
              onSubmit={this.onSubmit} 
              buttonText='Regístrate Gratis'
              loading={this.state.tryCreate}
              message= {this.props.error}
              askManager={false}
            />
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/phone.png')} />
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

export default connect(mapStateToProps, {createContact})(JobsNewsLetter)