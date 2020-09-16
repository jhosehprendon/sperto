import React from 'react';
import Card from '../Card';
import '../../css/Home.css' 
import history from '../../history';

class Consultor extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/30min"
  }

  sendToSystem = () => {
    history.push('/sistema-smi')
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%', marginTop: '-5%'}}>
              <h2 className='home-first__title'>Vende Más y Acelera el Crecimiento de tu Negocio con un <span style={{color: '#2DB67C'}}>Consultor de Marketing Digital</span> Certificado</h2>
              <h3 className='home-first__subtitle'>Te Ayudo a Crear una Estrategia Efectiva y Anuncios en Facebook e Instagram que Venden!</h3>
              <button onClick={this.sendCalendly} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '20px', padding: '12px' }} className="btn btn-success">Agenda una Consultoría Gratis</button>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '3%', textAlign: 'center' }}>
          <p className="banner-first" style={{padding: '30px', display: 'inline'}}>Pongamos en Marcha un Sistema de Marketing Inteligente en tu Negocio</p>
          <button onClick={this.sendToSystem} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-light">Ver Sistema</button>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Cómo puedo ayudarte</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '80%', margin: '5rem auto 0'}}>Ahorra dinero y evita errores. Soy un consultor experto en marketing digital y puedo ayudarte a conseguir resultados con Facebook e Instagram. Construye un negocio sustentable sin desperdiciar dinero en el intento.</p>
          <div className="row" style={{paddingTop: '3%'}}>
            <div className="info-block">
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Ecommerce</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Lead Generation</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Servicios</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Educación</h5>
                </div>
              </Card>
            </div>
          </div>
        </div>
  
        <div style={{ backgroundColor: 'white', padding: '3%', width: '65%', margin: 'auto' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Creo en el poder del Marketing para Crear una Relación con tu Cliente y generar más Ganancias<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
        </div>
        <div className='home-fourth' style={{textAlign: 'center', padding: '40px 0 40px 0'}}>
          <h2 style={{fontSize: '30px', color: 'white'}}>Los Números no Mienten</h2>
          <p style={{color: "white", fontSize: '20px'}}>Lo que más me importa es el Retorno de Inversión de mis Clientes</p>
          <img className='image-fb' alt="sperto" src={require('../../images/en-screenshot.png')} />
          <p style={{color: "white", fontSize: '30px', fontWeight: 'bold'}}>2700% ROI</p>
          <button onClick={this.sendCalendly} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '20px', padding: '12px' }} className="btn btn-success">Agenda una Consultoría Gratis</button>
        </div>
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
        </div>
      </div>
    )
  }
} 


export default Consultor