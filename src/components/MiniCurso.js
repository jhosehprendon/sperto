import React from 'react';
import '../css/Sequence.css'

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

  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h2 style={{fontSize: '30px'}}>Mini Curso de Marketing Digital para Reclutadores IT </h2>
            <h3>Conoce cómo puedes conectar con talento calificado con el marketing digital.</h3>
            <h3>Inicia tu dia con el calendario lleno de entrevistas programadas con candidatos.</h3>
            <iframe type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/QU_7Wwj2f8w" allowfullscreen></iframe>
            <div>
              <button 
                type="button" 
                style={{margin: '10px 0 10px 0', fontWeight: 'bold', padding: '12px' }} 
                className="btn btn-success"
                className={[this.state.hideButton ? 'button-hidden' : '', "btn", "btn-success"].join(' ')} 
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