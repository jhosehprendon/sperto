import React from 'react';
import { connect } from 'react-redux';
import LeadForm from './LeadForm';
import { createContact } from '../store/actions';


// import history from '../history';

class CursoReclutadores extends React.Component {

  state = {
    tryCreate: false
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 3, 7).then(() => {
        this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }
  
  render() {
    return (
      <div>
        <div className='consulta-block'>
          <h1 className='consulta-title'>¿Te Cuesta Cubrir Vacantes a Tiempo con Candidatos Calificados?</h1>
          <div style={{fontSize: '25px'}} className='blog-content'>
            <p>Si te cuesta conseguir candidatos calificados, si te toma mucho tiempo cubrir vacantes, si sientes presión de tus managers o clientes… Sigue leyendo.</p>
            <p>¿Estas cansado de no ver resultados a pesar de tus esfuerzo? ¡Entonces este mensaje es para ti!</p>
            <p>Quiero compartir contigo una estrategia que va a optimizar tu tiempo y tus esfuerzos…Te permitirá conectar con candidatos calificados en tu proceso de reclutamiento y cubrirás más vacantes en menor tiempo.</p>
            <p>Pero necesitas saber que tiene un precio no hacer nada al respecto. </p>
            <h2>Si no haces nada al respecto, solo se pondrá peor.</h2>
            <p>Lo que la mayoría de reclutadores hacen cuando necesitan cubrir más vacante, es acelerar el proceso. Envían mensajes a cualquiera que encuentran en Linkedin, postean memes graciosos con la esperanza de captar la atención de algún candidato y piden referencias desesperadamente. Lo cierto es que, para la mayoría de reclutadores, nada de esto funciona.</p>
            <ul>
                <li>No obtienen respuesta de los candidatos</li>
                <li>No cubren suficientes vacantes a tiempo</li>
            </ul>
            <p>¿Y que pasa si no haces nada? ¿Si te mantienes haciendo lo mismo?</p>
            <p>Perderás tiempo y esfuerzo… Entonces llegará la frustración. Pones en riesgo tu trabajo porque tu manager o cliente no ven resultados.</p>
            <h2>He descubierto cómo los reclutadores pueden cubrir más vacantes con candidatos calificados.</h2>
            <p>Existe una fórmula que funciona y aquí te cuento la historia:</p>
            <p>Desde que me convertí en programador, he sido contactado por los reclutadores de la misma manera (con mensajes tipo Spam, poco personales para vender su oferta).  No tienen la cortesía de leer mi perfil en Linkedin antes de contactarme, no mencionan las oportunidades que hay en esa vacante para mi, nada acerca del proyecto que pueda ser de mi interés. En conclusión, no hay un acercamiento personal.</p>
            <p>También he trabajado como Marketer durante varios años y entendí inmediatamente que existía un problema en cómo se comunican los reclutadores con sus candidatos.</p>
            <p>Una estrategia de marketing exitosa es la que construye relaciones antes de vender. Al final del día, estas vendiendo un nuevo empleo, es una transacción mucho más compleja comparada a vender un par de zapatos, pero al final sigue siendo una VENTA. Y como toda venta, se necesita de una estrategia de marketing ganadora.</p>
            <p>Nadie pide matrimonio en la primera cita, seguramente obtendrás un NO… Bueno, esto esta pasando con los reclutadores. Están hacienda la propuesta muy pronto.</p>
            <p>Entonces, he estudiado cómo las grandes empresas como Google y Linkedin utilizan el marketing para ejecutar un procesos de reclutamiento más eficiente... Son capaces de posicionar talento calificado en vacantes de una forma más rápida y efectiva. Me gustaría compartir contigo este conocimiento.</p>
            <p>Por eso he creado <strong>El Curso de Marketing Digital para Reclutadores.</strong></p>
            <h2>Funciona para los Reclutadores de Google, Empresas Tecnológicas, Startups, y funcionará para ti.</h2>
            <p><strong>Finalmente, ¡Es tu turno!</strong></p>
            <p>Una vez realices el <strong>Curso de Marketing Digital</strong> obtendrás la clave para:</p>
            <ul>
              <li>Construir una relación con tus prospectos</li>
              <li>Crear una comunidad de candidatos pasivos</li>
              <li>Obtener más respuestas a tus invitaciones</li>
              <li>Cubrir más vacantes, en menos tiempo</li>
            </ul>
            <br></br>
            <p>Y Aprenderás:</p>
            <ul>
              <li>Los principios del Marketing Digital para el proceso de Talent Acquisition</li>
              <li>Sobre embudos de marketing y el candidate journey</li>
              <li>La estrategia para construir relaciones con candidatos</li>
              <li>Cómo usar la publicidad paga en Facebook para promover la vacante</li>
              <li>Cómo crear una campañas de Remarketing</li>
              <li>En pocas palabras, te convertirás en un reclutador full-stack... Tendrás las herramientas y el conocimiento avanzado que te traerá mejores resultados</li>
            </ul>
            <br></br>
            <p><strong>¡Es el momento de tomar una decisión!</strong></p>
            <p>Puedes seguir haciendo lo que has venido haciendo, pero ya sabes que resultados vas a obtener.</p>
            <p>Pregúntate si es realmente lo que quieres lograr.</p>
            <p>Entonces, “Haz algo diferente, y obtendrás un resultado diferente”. Finalmente comienza a cubrir más vacantes a tiempo con candidatos calificados.</p>
            <p>¿Qué quieres realmente para ti?, esto es lo que tienes que hacer:</p>
            <p>Haz Click en el botón de abajo, completa el formulario con tu información de contacto y recibirás un Link de Paypal donde podrás hacer el pago he inmediatamente tener acceso al curso.</p>
          </div>
        </div>
        <div style={{textAlign: "center"}}>
          <hr style={{width: '30%', backgroundColor: '#f2c924'}}></hr>
          <h2>Curso de Marketing Digital para Reclutadores IT</h2>
          <h2><span style={{textDecoration: 'line-through'}}>$2000</span> $197</h2>
        </div>
        <div style={{margin: 'auto', width: '400px'}}>
          <LeadForm 
            onSubmit={this.onSubmit} 
            buttonText='Hacer Pago'
            loading={this.state.tryCreate}
            message= {this.props.error}
          />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    error: state.contact.error
  }
}

export default connect(mapStateToProps, {createContact})(CursoReclutadores)
