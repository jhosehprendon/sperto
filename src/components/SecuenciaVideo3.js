import React from 'react';
import history from '../history';

const SecuenciaVideo3 = () => {
  return ( 
    <div>
      <div>
        <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
          <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/secuencia/video-1')}>1. Audiencias Personalizadas </span> > <span style={{cursor:'pointer'}} onClick={() => history.push('/secuencia/video-2')}>2. Campaña de Lead Generation </span> > 3. Sistema de Marketing</h3> 
          <h2 style={{fontSize: '30px'}}>Sistema de Generación de Candidatos </h2>
          <h3>Conoce el sistema automatizado que te va a permitir conectar con candidatos de calidad</h3>
          <iframe type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/QU_7Wwj2f8w" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
} 

export default SecuenciaVideo3