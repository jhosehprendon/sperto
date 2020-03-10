import React from 'react';
import history from '../history';

class FBGrupo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToLeadMagnet = () => {
    history.push('/guia-lead-magnet')
  }

  render() {
    return ( 
      <div className='consulta-block'>
        <h1 className='consulta-title'>Gracias por tu interés en nuestro contenido y en conectar con nosotros</h1>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>En estos momentos sólo podemos dedicar las llamadas a quienes puedan contratar nuestros servicios.</p>
          <p>Mientras tanto, conoce el poder del Lead Magnet y cómo debes crear uno que funcione en tu strategia de marketing.</p>
        </div>
        <div style={{textAlign: 'center', marginTop: '5px'}}>
          <button onClick={this.sendToLeadMagnet} type="button" style={{marginBottom: '10px', fontWeight: 'bold', padding: '12px', fontSize: '16px' }} className="btn btn-success">Ver más</button>
        </div>  
      </div>
    )
  }
} 

export default FBGrupo