import React from 'react';
// import ModalAskLeadMagnet from '../ModalAskLeadMagnet';

class GraciasGuiaPlan extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // openModal = () => {
  //   this.refs.child.openModal();
  // }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1 style={{marginBottom:'-20px'}}>¡Felicidades!</h1>
          <h1>Tu Guía está en camino</h1>
        </div>
        <div style={{fontSize: '24px'}} className='blog-content'>
          <p><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i><strong>Importante</strong></p>
          <p>En pocos minutos llegará la guía a tu email. Si no la encuentras en la bandeja de entrada principal revisa en las carpetas secundarias y por último en correos no deseados.</p>
          <img style={{textAlign: 'center', width: '100%'}} alt="sperto" src={require('../../images/email.png')} />
        </div>
      </div>
      {/* <div style={{textAlign: 'center', margin: '-50px 0 10px 0'}}>      
        <iframe title="guiaEmails" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/ELCP32n20_w" allowfullscreen></iframe>
      </div>
      <div style={{textAlign: 'center'}}>
        <button onClick={this.openModal} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agendar Llamada</button>
      </div>
      <ModalAskLeadMagnet ref="child"/> */}
    </div>
    )
  }
} 

export default GraciasGuiaPlan