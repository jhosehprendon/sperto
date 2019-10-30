import React from 'react';

const ConsultaGracias = () => {
  return ( 
    <div>
      <div>
        <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
          <h2 style={{fontSize: '30px'}}>¡Muy bien! Nuestra reunión ya está agendada</h2>
          <h3>Te llegará un email de confirmación. Te invito a ver este corto video</h3>
          <iframe title="guiaEmails" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/ELCP32n20_w" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
} 

export default ConsultaGracias