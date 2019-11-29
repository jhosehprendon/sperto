import React from 'react';
import { Link } from 'react-router-dom';

class DescargaGuiaSiglasIT extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='blog-block'>
        <div className='blog-content'>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '40px', textAlign: 'center'}}>Haz Click en el Botón para Descargar la Guía</h2>
            <p>Si usas Chrome, la Guía se descargará en la barra inferior.</p>
            <p>Si usas Safari, se abrirá automáticamente en otra ventana.</p>
            <Link to="/files/guia_siglas_it.pdf" target="_blank" download>
              <button type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Descargar Guía</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
} 

export default DescargaGuiaSiglasIT