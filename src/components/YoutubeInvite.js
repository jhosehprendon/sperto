import React from 'react';

class YoutubeInvite extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToYoutube = () => {
    window.location.href = "https://www.youtube.com/channel/UCEyUgXcdXVSTXnZhTJ29dhw"
  }

  render() {
    return ( 
      <div className='consulta-block'>
        <h1 className='consulta-title'>Gracias por tu interés en nuestro contenido y en conectar con nosotros</h1>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>En estos momentos sólo podemos dedicar las llamadas a quienes puedan contratar nuestros servicios.</p>
          <p>Mientras tanto, te invito a ver más información útil en nuestro canal de Youtube.</p>
          <p>Para estar informado de lo que publicamos subscríbete y activa las alertas.</p>
        </div>
        <div style={{textAlign: 'center', marginTop: '-40px'}}>
          <button onClick={this.sendToYoutube} type="button" style={{marginBottom: '10px', fontWeight: 'bold', padding: '12px', fontSize: '16px' }} className="btn btn-success">Ir al Canal</button>
        </div>  
      </div>
    )
  }
} 

export default YoutubeInvite