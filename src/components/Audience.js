import React from 'react';
import Card from './Card';
import '../css/Home.css' 

class Audience extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Construye Anuncios en Facebook con la Audiencia Perfecta</h2>
              <h3 className='home-first__subtitle' style={{width: '80%'}}>Evitar Cometer Errores y Desperdiciar Dinero</h3>
              <h3 className='home-first__subtitle' style={{marginTop: '-4px'}}>Hacemos la Investigación por ti</h3>
              <h3 className='home-first__subtitle' style={{marginTop: '-4px'}}>Encontramos Intereses Menos Costosos, que Generan Ventas</h3>
              {/* <button onClick={this.clickToPrice} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Ver Detalles</button> */}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '3%', textAlign: 'center' }}>
          <p className="banner-first" style={{padding: '30px', display: 'inline'}}>Usar la Audiencia Correcta puede Ahorrarte Dinero y Darte Resultados más Rápido</p>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Consigue Ventas y Retornos Positivos en Facebook e Instagram</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
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
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Services</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Info Products</h5>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '70%', margin: '5rem auto 0'}}>El estudio de audiencias es el elemento más importante de una campaña en Facebook. Para obtener resultados debes dedicar tiempo y conocer los procesos efectivos.</p>
        <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '70%', margin: '2rem auto 0'}}>Nuestro equipo tiene 6 años de experiencia y puede hacerlo por ti. Vas a ahorrar tiempo y evitar cometer errores que se reflejan en dinero perdido.</p>

        <div style={{ backgroundColor: 'white', padding: '3%', width: '68%', margin: 'auto' }}>
          <div style={{marginRight: '40px'}}>
              <Card>
                <div>
                  <h5 style={{color: '#295b8d', fontSize: '20px', textAlign: 'center'}}>Paquete de Audiencias</h5>
                  <p style={{color: '#304057', fontSize: '20px', textAlign: 'center'}}><strong><span style={{textDecoration: 'line-through'}}>$100</span></strong></p>
                  <p style={{textAlign: 'center', color: '#00b300', fontSize: '35px'}}><strong><span>$60</span></strong></p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-check-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>3 grupos de Audiencias</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-check-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>De 5 a 10 intereses / grupo</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-check-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Intereses menos competitivo</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-check-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Audiencias Calificadas</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-check-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Resultados a un menor costo</p>
                </div>
                <div style={{textAlign: 'center', marginTop: '30px'}}>
                  <div id="paypal-button-1mes-consultoria" style={{textAlign: 'center', marginTop: '5px'}}></div>
                </div>
              </Card>
            </div>

        </div>
        <div className='home-fourth' style={{textAlign: 'center', padding: '40px 0 40px 0'}}>
          <h2 style={{fontSize: '30px', color: 'white'}}>Los Numeros No Mienten</h2>
          <p style={{color: "white", fontSize: '20px'}}>Nuestros Clientes Consiguen Retornos de Inversión Altos</p>
          <img className='image-fb' alt="sperto" src={require('../images/en-screenshot.png')} />
          <p style={{color: "white", fontSize: '30px', fontWeight: 'bold'}}>2700% ROI</p>
        </div>
        
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
        </div>
      </div>
    )
  }
} 


export default Audience