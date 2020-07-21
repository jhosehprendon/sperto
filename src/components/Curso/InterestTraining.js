import React from 'react';
import Card from '../Card';
import history from '../../history';
import { Link } from 'react-router-dom';

class InterestTraining extends React.Component {

  sendToTool = () => {
    history.push('/interests-tool')
  }

  render() {
    return ( 
      <div>
        <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
          <h2 style={{fontSize: '30px', marginBottom: '40px'}}>Entrenamiento Avanzado de Intereses en Facebook</h2>
          <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/9eJkKmMOmyc" allowfullscreen></iframe>
        </div>
        <div style={{margin: '30px 0 30px 0'}}>
          <Card>
            <div style={{ textAlign: 'center'}}>
            <h5 style={{color: '#295b8d', fontSize: '20px'}}>Llamada de Consultoría</h5>
              <p style={{color: '#304057', fontSize: '20px'}}><strong><span style={{textDecoration: 'line-through'}}>$150</span></strong></p>
              <p style={{color: '#304057', fontSize: '20px', marginTop: '-20px'}}><strong><span>$24</span></strong></p>
              <p style={{color: '#304057', fontSize: '16px'}}><i className="fas fa-exclamation-circle" style={{marginRight: '8px', color: '#f2c924'}}></i>Revisemos tus Audiencias y Plan de Marketing</p>
              <div id="paypal-button-call-24"></div>
            </div>
            <div style={{fontSize: '14px', textAlign: 'center'}}>
              <p>Si tienes problemas para completar el pago escríbenos a:</p>
              <p style={{marginTop: '-10px'}}>jhosehp.rendon@gmail.com</p>
            </div>
          </Card>
        </div>
        <Card>
          <div style={{ textAlign: 'center'}}>
            <h5 style={{color: '#295b8d', fontSize: '20px'}}>Recursos</h5>
              <button onClick={this.sendToTool} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Herramienta de Intereses</button>
              <Link to="/files/Guia_targeting_research.pdf" target="_blank" download>
                <button onClick={this.descargaGuia} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Descargar Guia de Intereses</button>
              </Link>
          </div>
        </Card>
      </div>
    )
  }
} 

export default InterestTraining