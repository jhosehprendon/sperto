import React from 'react';

class MiniClass1 extends React.Component {
  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', margin: '20px 0 20px 0'}}>
        <h3>1. Estrategia de Marketing <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> &gt; 2. Audiencias de Facebook</span> <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> &gt; 3. Crea tu Campaña de Facebook</span></h3> 
        <h2 style={{fontSize: '30px'}}>Estrategia de Marketing</h2>
        <h3>Aprende cómo maximizar los ingresos de cada cliente y construye un Negocio Exitoso</h3>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/Hbp1mAzr4nw" allowfullscreen></iframe>
        <h3>Espera mañana el siguiente video en tu email</h3>
      </div>
    )
  }
} 

export default MiniClass1
