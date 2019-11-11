import React from 'react';
import '../css/Sequence.css'

class MiniCursoRegistro extends React.Component {
  sendToMiniCourse() {
    window.location.href = "https://jhosehprendon.activehosted.com/f/5"
  }
  render() {
    return ( 
      <div className='rmk-first'>
        <div className='rmk-first--flex over' style={{display: 'flex'}}>
          <div style={{marginRight: '10%'}}>
            <h3 className='rmk-first__subtitle' style={{color: '#FFDE59', fontWeight: 'bold'}}>Acceso a Mini Curso GRATIS</h3>
            <h2 className='rmk-first__title'>Marketing Digital y Facebook Ads para Reclutadores IT</h2>
            <p style={{color: 'white', fontSize: '20px'}}>Si haz decidido ver este curso, es porque probablemente tienes problemas para encontrar candidatos de calidad. Quizas te cuesta recibir respuestas a tus ofertas, en ocaciones comienzas el proceso con un candidato y al final este acepta otra oferta o simplemente buscas mejorar tu proceso de reclutamiento.</p>
            <button onClick={() => this.sendToMiniCourse()} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Acceder al Mini Curso</button>
          </div>
          <div className="cover-guia">
            <img style={{width: '250px'}} alt="sperto" src={require('../images/mini-curso.png')} />
          </div>
        </div>
      </div>
    )
  }
} 


export default MiniCursoRegistro