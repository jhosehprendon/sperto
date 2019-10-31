import React from 'react';
import history from '../history';

class CursoReclutadores extends React.Component {

  state = {
    clientData: {
      name: '',
      email: '',
      phone: ''
    }
  }


  handleInputChange = (event, value) => {
    this.setState({clientData: {...this.state.clientData, [value]: event.target.value}})
  }

  sendCursoPayment = () => {
    history.push('/curso-sistema-reclutadores/payment')
    window.location.reload(false)
  }
  
  render() {
    return (
      <div style={{marginTop: '10px'}}>
        <div style={{margin: '5% 0 1% 0'}}>
          <h1 className='nosotros-banner'><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>Que bueno iniciar tu día con el calendario lleno de entrevistas con candidatos potenciales <i className="fas fa-quote-right" style={{ color: '#f2c924'}}></i></h1>
        </div>
        <h2 style={{width: '80%', margin: '2% auto'}}>En este curso vas a conocer el poder del Marketing en el proceso de Reclutamiento y vas a poder crear tu sistema automático de generación de candidatos</h2>
        <div style={{textAlign: 'center'}}>
          <iframe title="miniCurso" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/QU_7Wwj2f8w" allowfullscreen></iframe>
        </div>
        <div style={{textAlign: "center", marginTop: '6%'}}>
          <hr style={{width: '30%', backgroundColor: '#f2c924'}}></hr>
          <h2>Curso de Marketing Digital para Reclutadores IT</h2>
          <h2><span style={{textDecoration: 'line-through'}}>$2000</span> $197</h2>
        </div>
        <form style={{marginTop: '30px', textAlign: 'center'}}>
          <div>
            <input className="payment-input" onChange={(e, value) => this.handleInputChange(e, 'name')} placeholder="Nombre"></input>
          </div>
          <div>
            <input className="payment-input" onChange={(e, value) => this.handleInputChange(e, 'email')} placeholder="Email"></input>
          </div>
        </form>
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <button onClick={this.sendCursoPayment} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Comprar curso</button>
        </div>
      </div>
    )
  }

}


export default CursoReclutadores