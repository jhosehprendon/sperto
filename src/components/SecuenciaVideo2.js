import React from 'react';
import history from '../history';

const SecuenciaVideo2 = () => {
  return ( 
    <div>
      <div>
        <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
          <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/secuencia/video-1')}>1. Audiencias Personalizadas </span> > 2. Campaña de Lead Generation <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> > 3. Sistema de Marketing</span></h3> 
          <h2 style={{fontSize: '30px'}}>Campaña de Lead Generation en Facebook </h2>
          <h3>Crea una campaña en Facebook con la audiencia personalizada de candidatos que creamos</h3>
          <iframe type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/QU_7Wwj2f8w" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
} 

export default SecuenciaVideo2