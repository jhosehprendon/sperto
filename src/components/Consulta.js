import React from 'react';

const Consulta = () => {
  return ( 
    <div>
        <div style={{textAlign: 'center', color: '#283d54', margin: 'auto', marginTop: '50px'}}>
          <h2>Agenda una llamada Gratis de 15 minutos con Jhosehp</h2>
          <iframe type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/QU_7Wwj2f8w" allowfullscreen></iframe>
          <div>
          <img style={{height: '120px', width: '120px', borderRadius: '50%', objectFit: 'cover', margin: '20px 0 20px 0'}} alt="jhosehp" src={require('../images/jhosehp.jpg')} />
          </div>
          <h3 style={{width: '55%', margin: 'auto'}}>En esta llamada esperamos conocer sobre tu negocio y objetivos para poder diseñar la mejor estrategia de marketing digital</h3>
        </div>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <button type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agendar Llamada</button>
        </div>
    </div>
  )
} 

export default Consulta