import React from 'react';

const Consulta = () => {
  return ( 
    <div>
        <div style={{textAlign: 'center', color: '#283d54', width: '65%', margin: 'auto', marginTop: '50px'}}>
          <img style={{height: '180px', width: '180px', borderRadius: '50%', objectFit: 'cover'}} alt="jhosehp" src={require('../images/jhosehp.jpg')} />
          <h2>Agenda una llamada de 15 minutos con Jhosehp</h2>
          <h3>En esta llamada esperamos conocer sobre tu negocio y objetivos comerciales para poder diseñar la mejor estrategia de marketing digital</h3>
        </div>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <button type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agendar Llamada</button>
        </div>
    </div>
  )
} 

export default Consulta