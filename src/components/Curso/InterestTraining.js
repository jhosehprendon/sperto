import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';

class InterestTraining extends React.Component {

  sendToTool = () => {
    window.open('/interests-tool', '_blank');
  }

  render() {
    return ( 
      <div>
        <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px', marginBottom: '20px'}}>
          <h2 style={{fontSize: '30px', marginBottom: '40px'}}>Entrenamiento Avanzado de Intereses en Facebook</h2>
          <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/9eJkKmMOmyc" allowfullscreen></iframe>
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