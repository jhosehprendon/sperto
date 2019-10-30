import React from 'react';

class CursoReclutadoresPayment extends React.Component {
  
  render() {
    return (
      <div style={{marginTop: '50px'}}>
        <div style={{textAlign: "center", marginTop: '6%'}}>
          <h2>Gracias por tu interés en el Curso Avanzado de Marketing para Reclutadores IT</h2>
          {/* <h2><span style={{textDecoration: 'line-through'}}>$2000</span> $197</h2> */}
          <p>Recibirás un email con los pasos a seguir para realizar el pago</p>
          {/* <p>(Para hacer el pago con tarjeta de crédito haz click en el icono de tu tipo de tarjeta abajo)</p> */}
        </div>
        {/* <div style={{width: '300px', margin: '2% auto'}} id="paypal-button-container"></div> */}
      </div>
    )
  }

}


export default CursoReclutadoresPayment