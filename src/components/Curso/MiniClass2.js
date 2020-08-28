import React from 'react';
import history from '../../history';
import Card from '../Card';
import { Link } from 'react-router-dom';

class MiniClass2 extends React.Component {
  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', margin: '20px 0 20px 0'}}>
        <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-1')}>1. Estrategia de Marketing </span> &gt; 2. Audiencias de Facebook <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> &gt; 3. Crea tu Campaña de Facebook</span></h3> 
        <h2 style={{fontSize: '30px'}}>Audiencias e Intereses de Facebook</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/r94Nrrh7adI" allowfullscreen></iframe>
        <h3>Espera mañana el siguiente video en tu email</h3>
        <Card>
          <div style={{ textAlign: 'center'}}>
            <h5 style={{color: '#295b8d', fontSize: '20px'}}>Recursos</h5>
              <Link to="/files/Guia_targeting_research.pdf" target="_blank" download>
                <button onClick={this.descargaGuia} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Descargar Guia de Intereses</button>
              </Link>
          </div>
        </Card>
      </div>
    )
  }
} 

export default MiniClass2
