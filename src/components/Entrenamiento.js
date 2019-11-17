import React from 'react';
import history from '../history';

class Entrenamiento extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToConsulta = () => {
    history.push('/consulta')
  }

  sendToCurso = () => {
    history.push('/curso-sistema-reclutadores')
  }

  
  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '30px', margin: '40px 0 40px 0'}}>Entrénate para conseguir mejores resultados</h2>
        </div>
        <div className="courses-block">
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <div>
              <img className="image-cursos" alt="sperto" src={require('../images/it-recruiter.png')} />
            </div>
            <h3>Curso de Marketing Digital para Reclutadores</h3>
            <div style={{marginBottom: '20px'}}>
              <button onClick={this.sendToCurso} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Ver Más</button>
            </div>
          </div>
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <div>
              <img className="image-cursos2" alt="sperto" src={require('../images/team-recruiter.jpg')} />
            </div>
            <h3>Entrenamiento para equipos en Empresas</h3>
            <div style={{marginBottom: '20px'}}>
              <button onClick={this.sendToConsulta} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Ver Más</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Entrenamiento