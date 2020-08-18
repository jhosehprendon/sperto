import React from 'react';

class RecruiterFive extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div style={{fontSize: '25px', color: '#283d54', marginBottom: '-5px'}} className='blog-content'>
            <h2>Para poner a funcionar esta máquina de adquisición de candidatos necesitas saber cómo aplicar una estrategia de marketing.</h2>
            <hr></hr>
            <p>Si quieres dar ese paso extra, controlar tu proceso de reclutamiento y ser mejor que la competencia debes aprender los detalles.</p>
            <p>Te voy a enseñar a implementar este sistema en una llamada privada 1 a 1.</p>
            <p>Agenda tu llamada conmigo por sólo $5</p>
          </div>
          <hr></hr>
            <h2 style={{textAlign: 'center', marginBottom: '-20px'}}>Todo por UN SÓLO pago de:</h2>
            <h2 style={{textAlign: 'center', color: '#00b300', fontSize: '45px'}}>$5</h2>
        </div>
        
        <div style={{textAlign: "center"}} className='blog-content'>
          <div id="paypal-agencia-5" style={{textAlign: 'center', marginTop: '5px'}}></div>
          <div style={{fontSize: '14px', textAlign: 'center'}}>
            <p>Si tienes problemas para completar el pago escríbenos a:</p>
            <p style={{marginTop: '-10px'}}>jhosehp@spertomedia.com</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default RecruiterFive