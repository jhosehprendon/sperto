import React from 'react';
import '../css/RemarketingCase.css'

const RemarketingCase = () => {
  return ( 
    <div>
      <div className='rmk-first'>
        <div className='rmk-first--flex over'>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#29A745', fontWeight: 'bold'}}>Acceso a Caso de Estudio GRATIS</h3>
            <h2 className='rmk-first__title'>Conoce el Secreto del Remarketing en Facebook que pocos conocen y que las Grandes Empresas usan para Vender Millones</h2>
            <h3 className='rmk-first__subtitle'>Caso de Estudio: Cómo un E-commerce de Suplementos pudo generar 90mil dólares adicionales al mes con una campaña de Remarketing</h3>
            <form style={{marginTop: '30px'}}>
              <div>
                <input className="input" placeholder="Nombre"></input>
              </div>
              <div>
                <input className="input" placeholder="Email"></input>
              </div>
            </form>
            <button type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} class="btn btn-success">Acceder a Caso de Estudio</button>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default RemarketingCase