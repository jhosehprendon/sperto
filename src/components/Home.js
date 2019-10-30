import React from 'react';
import Card from './Card';
import CardTestimonial from './CardTestimonial'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createClient } from '../store/actions';
import '../css/Home.css'
import history from '../history';

// blue dark #295b8d
// blue medium #3a8dde

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
 

class Home extends React.Component {

  state= {
    modalIsOpen: false,
    clientData: {
      name: '',
      email: '',
      phone: ''
    }
  }

  componentWillMount() {
    Modal.setAppElement('body');
}

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  sendClientInfo = (formValues) => {
    this.props.createClient(formValues).then(() => {
      if(!this.props.error) {
        this.closeModal()
      }
    })
  }

  handleInputChange = (event, value) => {
    this.setState({clientData: {...this.state.clientData, [value]: event.target.value}})
  }

  sendNosotros = () => {
    history.push('/sobre-nosotros')
  }

  sendConsulta = () => {
    history.push('/consulta')
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Construye Relaciones con el Mejor Talento IT</h2>
              <h3 className='home-first__subtitle'>Mejora tu Proceso de Selección con el Poder del Marketing Digital</h3>
              <button onClick={this.sendConsulta} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">¡Agenda tu Consulta Gratis!</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example"
              >
                  <p style={{marginLeft: '5px', color: '#295b8d', fontWeight: 'bold', fontSize: '18px', width: '320px'}}>Deja la siguiente información para contactarte y ayudarte a hacer marketing correctamente</p>
                  <form style={{marginTop: '30px'}}>
                    <div>
                      <input className="inputModal" placeholder="Nombre" onChange={(e, value) => this.handleInputChange(e, 'name')}></input>
                    </div>
                    <div>
                      <input className="inputModal" placeholder="Email" onChange={(e, value) => this.handleInputChange(e, 'email')}></input>
                    </div>
                    <div>
                      <input className="inputModal" type="number" placeholder="Número de teléfono" onChange={(e, value) => this.handleInputChange(e, 'phone')}></input>
                    </div>
                  </form>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <button onClick={() => this.sendClientInfo(this.state.clientData)} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px', marginRight:'40px' }} className="btn btn-success">Enviar información</button>
                    <button onClick={this.closeModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Quizás luego</button>
                  </div>
                  <p style={{color: 'red', marginTop: '5px'}}>{this.props.error}</p>
              </Modal>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '1%' }}>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p className="banner-first">Usamos estrategias efectivas de marketing digital para conectar y crear relaciones con talento de calidad</p>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Sistema de Generación de Candidatos</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <div className="row" style={{paddingTop: '4%'}}>
            <div className="info-block">
            <div>
                <Card>
                  <div style={{margin: '10px 0 10px 0px'}}>
                    <div>
                     <h5 className="card-title" style={{color: '#295b8d'}}>1- Lead Generation</h5>
                    </div>
                  </div>
                  <div style={{margin: '10px 0 10px -15px'}}>
                    <ul>
                      <li>Contenido de Valor</li>
                      <li>Conexión por Linkedin</li>
                      <li>Facebook Ads</li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div style={{margin: '10px 0 4px 0px'}}>  
                    <div>
                      <h5 className="card-title" style={{color: '#295b8d'}}>2- Construcción de Relación</h5>
                    </div>
                  </div>
                  <div style={{margin: '10px 0 10px -15px'}}>
                    <ul>
                      <li>Secuencia de Emails</li>
                      <li>Canal Slack</li>
                      <li>Ads con contenido</li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div style={{margin: '10px 0 10px 0px'}}>
                    <div>
                     <h5 className="card-title" style={{color: '#295b8d'}}>3- Llamada Reconocimiento</h5>
                    </div>
                  </div>
                  <div style={{margin: '10px 0 10px -15px'}}>
                    <ul>
                      <li>Filtro de leads de valor</li>
                      <li>Programación de reuniones</li>
                      <li>Evaluación inicial</li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div style={{margin: '10px 0 10px 0px'}}>  
                    <div>
                      <h5 className="card-title" style={{color: '#295b8d'}}>4- Llamada Oportunidad</h5>
                    </div>
                  </div>
                  <div style={{margin: '10px 0 10px -15px'}}>
                    <ul>
                      <li>Presentación de Vacante</li>
                      <li>Introducción al proceso</li>
                      <li>Selección</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#295b8d', paddingBottom: '2%' }}>
          <h2 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: '4%', marginTop: '4%'}}>Que dicen nuestros clientes</h2>
          <hr style={{backgroundColor: 'white', width: '80px'}}></hr>
          <div style={{paddingTop: '2%', margin: 'auto', width: '65%'}}>
            <CardTestimonial content='"It was a real pleasure working with Jhosehp, he is really knowledgeable about Facebook Ads and brought great results"' author="Iliana Ortiz, Lodgify - Barcelona"/>
            <CardTestimonial content='"Jhosehp was extremely quick in getting to work and provided invaluable insights and help setting up my facebook campaigns. Will definitely work with him again"' author="Joe Lauder, Satta Ltd - London"/>
          </div>
        </div>
  
        <div style={{ backgroundColor: 'white', padding: '3%' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Creemos en el Poder del Marketing para Crear Relaciones<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
        </div>
        <div className='home-fourth' style={{height: '350px'}}>
          <div className="over">
            <div className="container">
              <div className="row">
                <div className="col imageBackground2" style={{marginTop: '5%'}}>
                  <img style={{width: '75%'}} alt="sperto" src={require('../images/background.png')} />
                </div>
                <div className="col" style={{ paddingTop: '8%', color: 'white', fontWeight: 'bold', fontSize: '18px'}}>
                  <p style={{padding: '0 0 5px 30px', fontSize: '30px'}}>Genera Resultados con la Mejor Estrategia de Marketing</p>
                  <div style={{paddingLeft: '30px'}}>
                    <button onClick={this.sendConsulta} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">¡Agenda tu Consulta Gratis!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
          <a onClick={this.sendConsulta} style={{color: '#283d54', cursor: 'pointer'}}>Contáctanos para ayudarte a cumplir tus objetivos</a>
          <br/>
          <a style={{fontWeight: 'bold', cursor: 'pointer'}}  onClick={this.sendNosotros}>Sobre Nosotros</a>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
      error: state.client.error
  } 
}


export default connect(mapStateToProps, { createClient })(Home)