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

  sendToPaypal() {
    history.push('/')
  }

  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
        <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-1')}>1. Oportunidades Digitales </span> > <span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-2')}>2. Por qué Marketing Digital? </span> > 3. Conviértete en un Digital Marketer</h3> 
        <h2 style={{fontSize: '30px'}}>Comienza tu carrera como Digital Marketer</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/YiJ5oAIqXJY" allowfullscreen></iframe>
        <div>
          <button 
            type="button" 
            style={{margin: '10px 0 10px 0', fontWeight: 'bold', padding: '12px' }} 
            className={[this.state.hideButton ? 'button-hidden' : '', "btn", "btn-success"].join(' ')}
            onClick={() => this.sendToPaypal()}
          >
            Pagar Curso de Marketing Digital
          </button>
        </div>
      </div>
    )
  }
} 

export default MiniClass3