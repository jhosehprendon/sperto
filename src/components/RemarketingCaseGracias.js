import React from 'react';
import '../css/RemarketingCase.css'

const RemarketingCaseGracias = () => {
  return ( 
    <div style={{backgroundColor: '#295b8d'}}>
      <div className='home-first--flex over'>
        <div style={{marginRight: '10%'}}>
          <h2 className='home-first__title' style={{fontSize: '30px'}}>Felicidades! Haz dado el primer paso para conocer los super poderes del remarketing y ser más competitivo en tu industria</h2>
          <h3 className='gracias__subtitle'>Sólo falta un paso por confirmar. Al dar click en el botón de abajo podemos enviarte este y muchos más casos que serán útiles para tu negocio.</h3>
          <button type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Quiero aprender más</button>
        </div>
      </div>
    </div>
  )
} 

export default RemarketingCaseGracias