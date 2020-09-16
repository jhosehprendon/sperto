import React from 'react';
import '../css/Header.css'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalAskLeadMagnet extends React.Component  {

  state= {
    modalIsOpen: false,
    tryCreate: false
  }

 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 25, null).then(() => {
      this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <p style={{marginLeft: '5px', color: '#295b8d', fontWeight: 'bold', fontSize: '25px'}}>Comienza Aquí</p>
          <p style={{margin: '-20px 0 -25px 5px', color: '#295b8d', fontWeight: 'bold', fontSize: '18px'}}>Obtén Acceso Inmediato</p>
          <LeadForm
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Acceder a Curso Gratis'
            loading={this.state.tryCreate}
            message= {this.props.error}
          />
        </Modal>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    error: state.contact.error
  }
}

export default connect(mapStateToProps, {createContact}, null, {forwardRef: true})(ModalAskLeadMagnet)