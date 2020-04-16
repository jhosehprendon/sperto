import React from 'react';

class Curso extends React.Component {

  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h3>Curso de Marketing Digital para Emprendedores</h3>
            <p>Haz click en el botón de la esquina superior derecha del video para ver las demás clases > <i className="fas fa-bars" style={{marginLeft: '8px'}}></i></p>
            <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/videoseries?list=PLZqIM-AzfGfuROl-IxRXuhRyxGwVpd44f" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
} 

export default Curso