import React from 'react';
import '../css/Header.css'
import history from '../history';
import Modal from 'react-modal';

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

class ModalAsk extends React.Component  {

  state= {
    modalIsOpen: false
  }

  sendConsulta = () => {
    this.setState({modalIsOpen: false});
    history.push('/consulta')
  }

  sendFBGroup = () => {
    this.setState({modalIsOpen: false});
    history.push('/fb-grupo')
  }

 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
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
          <p style={{marginLeft: '5px', color: '#295b8d', fontWeight: 'bold', fontSize: '25px'}}>How do you describe yourself?</p>
            <p style={{fontSize: '18px', width: '80%'}}>I am a Founder, CEO or Director, I manage marketing budget and take decisions</p>
            <button onClick={this.sendConsulta} type="button" style={{fontWeight: 'bold', padding: '12px', marginRight:'40px' }} className="btn btn-success">Continue as Decision Maker</button>
            <p style={{fontSize: '18px', width: '80%', marginTop: '30px'}}>I am a Media Buyer, I don't manage marketing budget or take decisions</p>
            <button onClick={this.sendFBGroup} type="button" style={{fontWeight: 'bold', padding: '12px', marginRight:'40px' }} className="btn btn-success">Continue as Media Buyer</button>

          {/* <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            <button onClick={() => this.sendClientInfo(this.state.clientData)} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px', marginRight:'40px' }} className="btn btn-success">Enviar información</button>
            <button onClick={this.closeModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Quizás luego</button>
          </div> */}
          <p style={{color: 'red', marginTop: '5px'}}>{this.props.error}</p>
        </Modal>
      </div>
    )
  } 
}


export default ModalAsk;