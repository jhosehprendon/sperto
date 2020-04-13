import React from 'react';
import history from '../../history';

class PlayListIntro extends React.Component {

  sendGuiaEmails = () => {
    history.push('/guia-email-candidato')
  }

  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h3>Introduccción al Curso de Marketing Digital</h3>
            <p>Haz click en el botón de la esquina superior derecha del video para ver las demás clases > <i className="fas fa-bars" style={{marginLeft: '8px'}}></i></p>
            <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/videoseries?list=PLZqIM-AzfGfuhTKG4dtvEGiHH-bLG8QAk" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
} 

export default PlayListIntro