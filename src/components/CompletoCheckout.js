import React from 'react';

class CompletoCheckout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1>Curso de Marketing Digital y Facebook Ads Avanzado con Mentoria Personalizada</h1>
          <p style={{marginTop: '-10px'}}>(4 llamadas incluídas)</p>
        </div>
        <div style={{fontSize: '24px', textAlign: 'center'}} className='blog-content'>
          <p style={{marginTop: '-20px'}}><strong>Antes: <span style={{textDecoration: 'line-through'}}>$3000</span></strong></p>
          <p style={{marginTop: '-20px'}}><strong>Ahora: $997</strong></p>
          <div id="paypal-button-container-completo"></div>
        </div>
      </div>
    </div>
    )
  }
} 

export default CompletoCheckout