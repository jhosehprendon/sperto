import React from 'react';
import ModalAskLeadMagnet from '../ModalAskLeadMagnet'
import Modal from 'react-modal';
import '../../css/Home.css' 

class Curso extends React.Component {

  state= {
    modalIsOpen: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal = () => {
    this.refs.child.openModal();
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%', marginTop: '-5%'}}>
              <h2 className='home-first__title'>Curso Avanzado y Práctico de Marketing Digital, <span style={{color: '#2DB67C'}}>Facebook</span> e <span style={{color: '#2DB67C'}}>Instagram</span> Ads</h2>
              <h3 className='home-first__subtitle'>Comienza con el Módulo de Fundamentos del Marketing y Facebook Gratis</h3>
              <button onClick={this.openModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '20px', padding: '12px' }} className="btn btn-success">Acceso Gratis</button>
              <ModalAskLeadMagnet ref="child"/>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '3%', textAlign: 'center' }}>
          <p className="banner-first">No Estarás Solo... Tendrás un Guía.</p>
          <p className="banner-first" style={{padding: '30px', display: 'inline'}}>Acceso a Grupo Privado de Facebook donde Responderé tus Preguntas.</p>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ padding: '4% 0 4% 0'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Voy a Transferirte 7 años de Experiencia</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '80%', margin: '4rem auto 0'}}>Conviértete en un experto en Marketing Digital. Conoce los Fundamentos y Técnicas que te van a permitir lanzar campañas exitosas, vender más y construir negocios prósperos.</p>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '80%', margin: '2rem auto 0'}}>No importa si eres un Dueño de Negocio, de una Agencia Digital o si quieres expandir tus conocimientos.</p>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '80%', margin: '2rem auto 0'}}>Este curso es para ti!</p>
        </div>
        <div className='home-fourth' style={{textAlign: 'center', padding: '40px 10px 40px 10px'}}>
          <h2 style={{fontSize: '30px', color: 'white'}}>Los Números no Mienten</h2>
          <p style={{color: "white", fontSize: '20px'}}>Tendrás el conocimiento para conseguir Retornos de Inversión Positivos</p>
          <div>
            <img className='image-fb' alt="sperto" src={require('../../images/en-screenshot.png')} />
            <p style={{color: "white", fontSize: '30px', fontWeight: 'bold'}}>2700% ROI</p>
            <button onClick={this.openModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '20px', padding: '12px' }} className="btn btn-success">Prueba el Módulo de Fundamentos Gratis</button>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
        </div>
      </div>
    )
  }
} 


export default Curso