import React from 'react';

class BasicCheckout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <div className='consulta-title'>
          <h1>Curso de Marketing Digital y Facebook Ads Avanzado</h1>
        </div>
        <div style={{fontSize: '24px', textAlign: 'center'}} className='blog-content'>
          <p style={{marginTop: '-20px'}}><strong>Antes: <span style={{textDecoration: 'line-through'}}>$1500</span></strong></p>
          <p style={{marginTop: '-20px'}}><strong>Ahora: $497</strong></p>
          <div id="paypal-button-container-basico"></div>
        </div>
      </div>
    </div>
    )
  }
} 

export default BasicCheckout