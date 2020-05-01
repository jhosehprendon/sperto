import React from 'react';
import Card from './Card';
import Modal from 'react-modal';
import ModalAsk from './ModalAsk'
import '../css/Home.css' 

class Home extends React.Component {

  state= {
    modalIsOpen: false
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
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Estrategias de Marketing que Funcionan con Facebook e Instagram Ads</h2>
              <h3 className='home-first__subtitle'>Construye una Audiencia, Vende Más y Acelera el Crecimiento de tu Negocio</h3>
              <button onClick={this.openModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Trabajemos juntos</button>
              <ModalAsk ref="child"/>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '1%' }}>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p className="banner-first">Ayudamos a Negocios a Desarrollar una Estrategia de Marketing Digital que les permite crecer con Facebook e Instagram Ads</p>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>¿QUÉ HACEMOS?</h2>
          {/* <p style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Consigue Talento Calificado, Rapidez y Diversidad</p> */}
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <div className="row" style={{paddingTop: '3%'}}>
            <div className="info-block">
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Estrategia de Marketing</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Lead Generation</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Construimos tu audiencia</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Embudo de venta</h5>
                </div>
              </Card>
            </div>
          </div>
        </div>
        {/* <div style={{ backgroundColor: '#295b8d', paddingBottom: '2%' }}>
          <h2 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: '4%', marginTop: '4%'}}>Que dicen nuestros clientes</h2>
          <hr style={{backgroundColor: 'white', width: '80px'}}></hr>
          <div style={{paddingTop: '2%', margin: 'auto', width: '65%'}}>
            <CardTestimonial content='"It was a real pleasure working with Jhosehp, he is really knowledgeable about Facebook Ads and brought great results"' author="Iliana Ortiz, Lodgify - Barcelona"/>
            <CardTestimonial content='"Jhosehp was extremely quick in getting to work and provided invaluable insights and help setting up my facebook campaigns. Will definitely work with him again"' author="Joe Lauder, Satta Ltd - London"/>
          </div>
        </div> */}
  
        <div style={{ backgroundColor: 'white', padding: '3%' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Creemos en el poder del Marketing para Crear una Relación con tu Cliente y generar más Ganancias<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
        </div>
        <div className='home-fourth' style={{height: '350px'}}>
          <div className="over">
            <div className="container">
              <div className="row">
                <div className="col imageBackground2" style={{marginTop: '5%'}}>
                  <img style={{width: '75%'}} alt="sperto" src={require('../images/background.png')} />
                </div>
                <div className="col" style={{ paddingTop: '6%', color: 'white', fontSize: '18px'}}>
                  <h2 style={{padding: '0 0 5px 30px', fontSize: '30px'}}>Definamos una Estrategia de Marketing Digital para hacer Crecer tu Negocio</h2>
                  <div style={{paddingLeft: '30px'}}>
                    <button onClick={this.openModal} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Trabajemos juntos</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
          <a onClick={this.openModal} style={{color: '#283d54', cursor: 'pointer'}}>Contáctanos para ayudarte a crecer tu negocio</a>
          <br/>
          {/* <a style={{fontWeight: 'bold', cursor: 'pointer'}}  onClick={this.sendNosotros}>About Us</a> */}
        </div>
      </div>
    )
  }
} 


export default Home