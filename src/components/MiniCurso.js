import React from 'react';
import '../css/Sequence.css';
import history from '../history';

class MiniCurso extends React.Component {

  state= {
    hideButton: true
  }

  componentDidMount() {
    this.showButton()
  }

  showButton = () => {
    setTimeout(() => {
      this.setState({hideButton: false})
    }, 50000)
  }

  sendToCourse() {
    history.push('/curso-sistema-reclutadores')
  }

  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h2 style={{fontSize: '30px'}}>Mini Curso de Marketing Digital para Reclutadores IT </h2>
            <h3>Conoce cómo puedes conectar con talento calificado a través del marketing digital</h3>
            <iframe title="miniCurso" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/jCnjgErlgWQ" allowfullscreen></iframe>
            <div>
              <button 
                type="button" 
                style={{margin: '10px 0 10px 0', fontWeight: 'bold', padding: '12px' }} 
                className={[this.state.hideButton ? 'button-hidden' : '', "btn", "btn-success"].join(' ')}
                onClick={() => this.sendToCourse()}
              >
                Ver Curso Avanzado
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default MiniCurso