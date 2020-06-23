import React from 'react';
import ModalAskLeadMagnet from '../ModalAskLeadMagnet';

class GraciasGuiaPlan extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  openModal = () => {
    this.refs.child.openModal();
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1>Tu Guía está en camino</h1>
        </div>
        <div style={{fontSize: '24px'}} className='blog-content'>
          <p>En pocos minutos llegará la guía a tu email. Si no la encuentras en la bandeja de entrada revisa en correos no deseados.</p>
          <p><strong>Importante!</strong></p>
          <p>Debes ver este video corto donde explico los siguientes pasos que debes tomar.</p>
        </div>
      </div>
      <div style={{textAlign: 'center', margin: '-50px 0 10px 0'}}>      
        <iframe title="guiaEmails" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/ELCP32n20_w" allowfullscreen></iframe>
      </div>
      <div style={{textAlign: 'center'}}>
        <button onClick={this.openModal} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agendar Llamada</button>
      </div>
      <ModalAskLeadMagnet ref="child"/>
    </div>
    )
  }
} 

export default GraciasGuiaPlan