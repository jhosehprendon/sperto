import React from 'react';
import Card from '../Card';
import '../../css/Home.css' 

class Curso extends React.Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToCheckoutBasic = () => {
    window.location.href = "https://spertomedia.com/checkout/basic"
  }

  sendToCheckoutCompleto = () => {
    window.location.href = "https://spertomedia.com/checkout/completo"
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   


  render() {
    
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Te Enseñamos cómo Acelerar el Crecimiento de tu Negocio a través del Marketing Digital</h2>
              <h3 className='home-first__subtitle' style={{lineHeight: '30px'}}>Aprende en 1 Mes a Diseñar Embudos de Venta y a Crear Campañas en Facebook, Instagram, Youtube y Google que Generan Retornos Positivos</h3>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '3%', textAlign: 'center' }}>
          <p className="banner-first" style={{padding: '30px', display: 'inline'}}>Aprende a combinar Embudos de Venta con Facebook, Instagram, Youtube y Google Ads</p>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Cómo es el Entrenamiento</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <div className="row" style={{paddingTop: '3%'}}>
            <div className="info-block">
            <div style={{margin: '0px 10px 10px 0'}}>
                <Card>
                  <div style={{margin: '6px 6px 4px 0px'}}>  
                      <h5 style={{color: '#295b8d', lineHeight: '22px'}}>Entrenamiento guiado por un mes. Aprende lo fundamentos del marketing, construye tus ofertas y embudo de ventas.</h5>
                  </div>
                </Card>
              </div>
              <div style={{margin: '0px 10px 10px 0'}}>
                <Card>
                  <div style={{margin: '6px 6px 4px 0px'}}>
                      <h5 style={{color: '#295b8d', lineHeight: '22px'}}>Acceso a clases y prácticas semanales. Acceso al grupo de Facebook donde se responderán tus preguntas.</h5>
                  </div>
                </Card>
              </div>
              <div style={{margin: '0px 10px 10px 0'}}>
                <Card>
                  <div style={{margin: '6px 6px 4px 0px'}}>  
                      <h5 style={{color: '#295b8d', lineHeight: '22px'}}>Conoce las plataformas de tráfico y aprende cómo crear campañas exitosas en Facebook, Instagram, Youtube y Google.</h5>
                  </div>
                </Card>
              </div>
              <div style={{margin: '0px 10px 10px 0'}}>
                <Card>
                  <div style={{margin: '6px 6px 4px 0px'}}>  
                      <h5 style={{color: '#295b8d', lineHeight: '22px'}}>Aprende el proceso de análisis, escalado y optimización que se utiliza para mantener campañas que funcionan.</h5>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
  
        <div style={{padding: '3%', width: '65%', margin: 'auto' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Creemos en el poder del Marketing para Crear una Relación con tu Cliente y generar más Ganancias<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
          <div style={{textAlign: 'center', marginTop: '10px'}}>
            <button onClick={this.scrollToMyRef} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Ver Cursos</button>
          </div>
        </div>
        <div className='home-fourth' style={{textAlign: 'center', padding: '40px 0 40px 0'}}>
          <h2 style={{fontSize: '30px', color: 'white'}}>Los Números no Mienten</h2>
          <p style={{color: "white", fontSize: '20px'}}>Lo que más nos importa es el Retorno de Inversión de nuestros Estudiantes</p>
          <img className='image-fb' alt="sperto" src={require('../../images/en-screenshot.png')} />
          <p style={{color: "white", fontSize: '30px', fontWeight: 'bold'}}>2700% ROI</p>
        </div>
        
        <div className="row" ref={this.myRef} style={{margin: '30px 0 30px 0'}}>
          <div className="info-block">
            <div style={{marginBottom: '40px', marginRight: '40px'}}>
              <h5 style={{color: '#2DB67C', fontSize: '20px', textAlign: 'center'}}>Preferido por Marketers</h5>
              <Card>
                <div>
                  <h5 style={{color: '#295b8d', fontSize: '20px', textAlign: 'center'}}>Entrenamiento Solo</h5>
                  <p style={{color: '#304057', fontSize: '20px', textAlign: 'center'}}><strong><span style={{textDecoration: 'line-through'}}>$800</span></strong></p>
                  <p style={{color: '#304057', fontSize: '20px', marginTop: '-20px', textAlign: 'center'}}><strong><span>$497</span></strong></p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Embudos de Ventas</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Fuentes de Tráfico</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Facebook e Instagram Ads</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Google Ads</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Youtube Ads</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Estrategia de Marketing</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Prácticas</p>
                </div>
                <div style={{textAlign: 'center', marginTop: '10px'}}>
                  <button onClick={this.sendToCheckoutBasic} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Comprar ($497)</button>
                </div>
              </Card>
            </div>
            <div style={{marginRight: '40px'}}>
                <h5 style={{color: '#2DB67C', fontSize: '20px', textAlign: 'center'}}>Preferido por Emprendedores</h5>
              <Card>
                <div>
                  <h5 style={{color: '#295b8d', fontSize: '20px', textAlign: 'center'}}>Entrenamiento Guiado</h5>
                  <p style={{color: '#304057', fontSize: '20px', textAlign: 'center'}}><strong><span style={{textDecoration: 'line-through'}}>$1500</span></strong></p>
                  <p style={{color: '#304057', fontSize: '20px', marginTop: '-20px', textAlign: 'center'}}><strong><span>$997</span></strong></p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#295b8d'}}></i>4 Llamadas de Coaching</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Embudos de Ventas</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Fuentes de Tráfico</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Facebook e Instagram Ads</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Google Ads</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Youtube Ads</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Estrategia de Marketing</p>
                  <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Prácticas</p>
                </div>
                <div style={{textAlign: 'center', marginTop: '10px'}}>
                  <button onClick={this.sendToCheckoutCompleto} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Comprar ($997)</button>
                </div>
              </Card>
              <p style={{color: '#295b8d', fontSize: '16px', width: '250px', margin: '10px auto'}}>Saca el mayor provecho con un mentor que te guiará en 4 llamadas de coaching incluidas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 


export default Curso