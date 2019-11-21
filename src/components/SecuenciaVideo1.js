import React from 'react';
import history from '../history';

class SecuenciaVideo1 extends React.Component {

  sendGuiaEmails = () => {
    history.push('/guia-email-candidato')
  }

  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h3>1. Audiencias Personalizadas <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> > 2. Campaña de Lead Generation</span> <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> > 3. Sistema de Marketing</span></h3> 
            <h2 style={{fontSize: '30px'}}>Crea tu audiencia personalizada con emails extraídos de Github</h2>
            <h3>Luego de extraer emails calificados podemos hacer marketing por Facebook directamente a los candidatos</h3>
            <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/ewzmw4jXrm4" allowfullscreen></iframe>
            <p style={{marginTop: '30px', fontWeight: 'bold'}}>Si no haz visto el poceso para encontrar emails de programadores a través de Github, puedes descargar la Guía abajo:</p>
              <div style={{margin: '10px 0 20px 0'}}>
                <button onClick={this.sendGuiaEmails}  type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Descargar Guía</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default SecuenciaVideo1