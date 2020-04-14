import React from 'react';
import history from '../../history';

class MiniClass2 extends React.Component {
  render() {
    return ( 
      <div style={{textAlign: 'center', color: '#283d54', marginTop: '20px'}}>
        <h3><span style={{cursor:'pointer'}} onClick={() => history.push('/mini-class-1')}>1. Oportunidades Digitales </span> > 2. Por qué Marketing Digital? <span style={{color: '#D3D3D3', cursor: 'not-allowed'}}> > 3. Conviértete en un Digital Marketer</span></h3> 
        <h2 style={{fontSize: '30px'}}>El Marketing Digital te abrirá las puertas</h2>
        <iframe title="video1" type="text/html" frameborder="0" className="video" src="https://www.youtube.com/embed/9RbKrWnPgwk" allowfullscreen></iframe>
      </div>
    )
  }
} 

export default MiniClass2