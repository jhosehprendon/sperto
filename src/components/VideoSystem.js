import React from 'react';
import ModalAsk from './ModalAsk';

class VideoSystem extends React.Component {

  openModal = () => {
    this.refs.child.openModal();
  }

  render() {
    return ( 
      <div>
        <div>
          <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
            <h1>Convierte tu Negocio en una Máquina de hacer Dinero</h1> 
            <h3 style={{width:  '80%', margin: 'auto'}}>No es un secreto que la dificultad en Facebook para los publicistas ha aumentado en los últimos años. Cuando antes se podia conseguir conversiones y ventas a un costo rentable, ahora parece ser imposible.</h3>
            <h3>Conoce el Sistema que usan los líderes del Marketing y las empresas exitosas</h3>
            <iframe title="videosystem" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/CVb9lykDaWc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div style={{margin: '10px 0 20px 0'}}>
              <button onClick={this.openModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agenda una Llamada</button>
            </div>
          </div>
        </div>
        <ModalAsk ref="child"/>
      </div>
    )
  }
} 

export default VideoSystem