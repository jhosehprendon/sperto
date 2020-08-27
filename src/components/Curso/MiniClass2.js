import React from 'react';
import history from '../../history';

class MiniClass2 extends React.Component {
  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', margin: '20px 0 20px 0'}}>
        <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-1')}>1. Estrategia de Marketing </span> &gt; 2. Audiencias de Facebook <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> &gt; 3. Crea tu Campaña de Facebook</span></h3> 
        <h2 style={{fontSize: '30px'}}>Audiencias e Intereses de Facebook</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/r94Nrrh7adI" allowfullscreen></iframe>
        <h3>Espera mañana el siguiente video en tu email</h3>
      </div>
    )
  }
} 

export default MiniClass2
