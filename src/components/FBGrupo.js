import React from 'react';

class FBGrupo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendFBGroup = () => {
    window.location.href = "https://www.facebook.com/groups/874419683006607"
  }

  render() {
    return ( 
      <div className='consulta-block'>
        <h1 className='consulta-title'>Gracias por tu interés en nuestro contenido y en conectar con nosotros</h1>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>En estos momentos sólo podemos dedicar las llamadas a quienes puedan contratar nuestros servicios.</p>
          <p>Pero te invitamos a unirte a nuestro grupo de Facebook donde constantemente estamos compartiendo contenido sobre marketing y lo último en Facebook e Instagram Ads.</p>
        </div>
        <div style={{textAlign: 'center', marginTop: '5px'}}>
          <button onClick={this.sendFBGroup} type="button" style={{marginBottom: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Unirme al Grupo</button>
        </div>  
      </div>
    )
  }
} 

export default FBGrupo