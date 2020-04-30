import React from 'react';
import Card from './Card';
import '../css/Home.css' 
import history from '../history';

class HomeEs extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToConsulta = () => {
    history.push('/consulta')
  }

  sendToSystem = () => {
    history.push('/sistema-smi')
  }

  sendToTool = () => {
    history.push('/interests-tool')
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Vende Más y Acelera el Crecimiento de tu Negocio</h2>
              <h3 className='home-first__subtitle'>Diseñamos y Ejecutamos un Sistema de Marketing que Funciona</h3>
              <button onClick={this.sendToConsulta} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Trabajemos juntos</button>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '3%', textAlign: 'center' }}>
          <p className="banner-first" style={{padding: '30px', display: 'inline'}}>Conoce más sobre el Sistema de Marketing Inteligente</p>
          <button onClick={this.sendToSystem} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-light">Ver Sistema</button>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Cómo podemos ayudarte</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '50%', margin: '5rem auto 0'}}>Ayudamos a negocios a vender más, crecer y ser rentables usando un Sistema de Marketing Inteligente y el poder de Facebook e Instagram Ads.</p>
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
        {/* <div style={{ backgroundColor: '#295b8d', paddingBottom: '2%' }}>
          <h2 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: '4%', marginTop: '4%'}}>Que dicen nuestros clientes</h2>
          <hr style={{backgroundColor: 'white', width: '80px'}}></hr>
          <div style={{paddingTop: '2%', margin: 'auto', width: '65%'}}>
            <CardTestimonial content='"It was a real pleasure working with Jhosehp, he is really knowledgeable about Facebook Ads and brought great results"' author="Iliana Ortiz, Lodgify - Barcelona"/>
            <CardTestimonial content='"Jhosehp was extremely quick in getting to work and provided invaluable insights and help setting up my facebook campaigns. Will definitely work with him again"' author="Joe Lauder, Satta Ltd - London"/>
          </div>
        </div> */}
  
        <div style={{ backgroundColor: 'white', padding: '3%', width: '65%', margin: 'auto' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Creemos en el poder del Marketing para Crear una Relación con tu Cliente y generar más Ganancias<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
        </div>
        <div className='home-fourth' style={{textAlign: 'center', padding: '40px 0 40px 0'}}>
          <h2 style={{fontSize: '30px', color: 'white'}}>Los Números no Mienten</h2>
          <p style={{color: "white", fontSize: '20px'}}>Lo que más nos importa es el Retorno de Inversión de nuestros Clientes</p>
          <img style={{width: '50%'}} alt="sperto" src={require('../images/en-screenshot.png')} />
          <p style={{color: "white", fontSize: '30px', fontWeight: 'bold'}}>2700% ROI</p>
        </div>

        <h2 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '50px'}}>Hemos Aumentado ROI de estos Proyectos</h2>

        <div className="row" style={{margin: '20px 0 50px 0'}}>
          <div className="info-block">
            <img  style={{width: '8rem', marginRight: '40px'}} alt="sperto" src={require('../images/EN-logo.png')} />
            <img style={{width: '10rem', marginRight: '40px'}} alt="sperto" src={require('../images/MC-logo.png')} />
            <img style={{width: '10rem', marginRight: '40px'}} alt="sperto" src={require('../images/rize-logo.png')} />
            <img style={{width: '12rem'}} alt="sperto" src={require('../images/FR-logo.png')} />
          </div>
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
                    <button onClick={this.sendToConsulta} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Trabajemos juntos</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
          <a onClick={this.sendToTool} style={{color: '#283d54', cursor: 'pointer'}}>Buscador de Facebook Interests</a>
          <br/>
          {/* <a style={{fontWeight: 'bold', cursor: 'pointer'}}  onClick={this.sendNosotros}>About Us</a> */}
        </div>
      </div>
    )
  }
} 


export default HomeEs