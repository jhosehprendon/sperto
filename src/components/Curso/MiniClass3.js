import React from 'react';
import history from '../../history';
import '../../css/Sequence.css';

class MiniClass3 extends React.Component {

  state= {
    hideButton: true
  }

  componentDidMount() {
    this.showButton()
  }

  showButton = () => {
    setTimeout(() => {
      this.setState({hideButton: false})
    },10000)
  }

  showPaypalButton = () => {
    if(!this.state.hideButton) {
      return (
        <div style={{marginBottom: '20px'}}>
          <p style={{fontWeight: 'bold'}}>Curso de Marketing Digital</p>
          <p>Antes <span style={{textDecorationLine: 'line-through'}}>$700</span> - Ahora $200</p>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="PQG66NC59ED5L" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          <p>Paga seguro con Paypal o tarjeta de crédito</p>
          <p>Si tienes problemas para realizar el pago envíanos un email: jhosehp@spertomedia.com</p>
        </div>
      )
    }
    return null 
  }

  sendToPaypal() {
    history.push('/')
  }

  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
        <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-1')}>1. Oportunidades Digitales </span> > <span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-2')}>2. Por qué Marketing Digital? </span> > 3. Conviértete en un Digital Marketer</h3> 
        <h2 style={{fontSize: '30px'}}>Comienza tu carrera como Digital Marketer</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/YiJ5oAIqXJY" allowfullscreen></iframe>
        {this.showPaypalButton()}
      </div>
    )
  }
} 

export default MiniClass3