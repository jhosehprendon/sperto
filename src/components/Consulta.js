import React from 'react';

class Consulta extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/15min"
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <h1 className='consulta-title'>¿Tus Proyectos se Retrasan por Falta de Ingenieros? <br></br>¿No Logras Cubrir Vacantes a Tiempo con Candidatos Calificados?</h1>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
        </div>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>Si a tus reclutadores les cuesta encontrar candidatos de calidad y cubrir vacantes a tiempo... Si estas cansado de no ver resultados. Entonces este mensaje es para ti.</p>
          <p>Hay una forma en que tus reclutadores pueden optimizar su tiempo y esfuerzos para contratar candidatos de calidad en menor tiempo.</p>
          <p>Pero necesitas saber que tiene un precio no hacer nada al respecto.</p>
          <h2>Si no haces nada al respecto, solo se pondrá peor.</h2>
          <p>Lo que hace la mayoría de los managers, cuando enfrentan problemas al no encontrar candidatos calificados, es de presionar a sus reclutadores para obtener resultados, invierten en software costos o contratan más reclutadores...Entonces, los reclutadores aceleran el proceso para llegar a más candidatos, enviando mensajes a cualquiera que consiguen por Linkedin o buscan referidos desesperadamente. Pero, para la mayoría de los managers, esto no funciona.</p>
          <ul>
              <li>No cubren suficientes vacantes a tiempo</li>
              <li>Los proyectos son retrasados</li>
              <li>Los recursos no son invertidos eficientemente</li>
              <li>Por lo tanto, la empresa no cumple con sus objetivos</li>
          </ul>
          <br></br>
          <p>¿Y qué pasa si no haces nada? ¿Si te mantienes haciendo lo mismo?.</p>
          <p>Pierdes dinero en recursos que no obtienen resultados...Arriesgas perder otro cliente o no cumples con los objetivos de la empresa.</p>
          <h2>He descubierto cómo las empresas pueden cubrir más vacantes a tiempo con candidatos de calidad.</h2>
          <p>Existe una fórmula que funciona y aquí te cuento la historia:</p>
          <p>Desde que me convertí en programador, he sido contactado por los reclutadores de la misma manera (con mensajes tipo Spam, poco personales para vender su oferta).  No tienen la cortesía de leer mi perfil en Linkedin antes de contactarme, no mencionan las oportunidades que hay en esa vacante para mi, nada acerca del proyecto que pueda ser de mi interés. En conclusión, no hay un acercamiento personal.</p>
          <p>También he trabajado como Marketer durante varios años y entendí inmediatamente que existía un problema en cómo se comunican los reclutadores con sus candidatos.</p>
          <p>Una estrategia de marketing exitosa es la que construye relaciones antes de vender. Al final del día, estas vendiendo un nuevo empleo, es una transacción mucho más compleja comparada a vender un par de zapatos, pero al final sigue siendo una VENTA. Y como toda venta, se necesita de una estrategia de marketing ganadora.</p>
          <p>Nadie pide matrimonio en la primera cita, seguramente obtendrás un NO… Bueno, esto esta pasando con los reclutadores. Están hacienda la propuesta muy pronto.</p>
          <p>Entonces, he estudiado cómo las grandes empresas como Google y Linkedin utilizan el marketing para ejecutar un procesos de reclutamiento más eficiente... Son capaces de posicionar talento calificado en vacantes de una forma más rápida y efectiva. Me gustaría compartir contigo este conocimiento.</p>
          <p>Por eso he creado el entrenamiento <strong>Bootcamp de Marketing para Reclutadores.</strong></p>
          <h2>Funciona para los Reclutadores de Google, Empresas Tecnológicas, Startups, y funcionará para ti.</h2>
          <p><strong>Finalmente, ¡Es tu turno!</strong></p>
          <p>Cuando entrenes a tu equipo con en el <strong>Bootcamp de Marketing para Reclutadores</strong> van a tener la clave para: </p>
          <ul>
            <li>Construir una relación con prospectos</li>
            <li>Crear una comunidad de candidatos pasivos</li>
            <li>Obtener más respuestas a tus invitaciones</li>
            <li>Cubrir más vacantes, en menos tiempo</li>
          </ul>
          <br></br>
          <p>Y tus reclutadores van a aprender:</p>
          <ul>
            <li>Los principios del Marketing Digital para el proceso de Talent Acquisition</li>
            <li>Sobre embudos de marketing y el candidate journey</li>
            <li>La estrategia para construir relaciones con candidatos</li>
            <li>Cómo usar publicidad paga para obtener aplicaciones</li>
            <li>Vocabulario técnico para poder establecer conversaciones con ingenieros</li>
            <li>Cómo escribir un Job Description que llame la atención</li>
            <li>...En pocas palabras, tendrás un equipo de reclutadores full-stack con las herramientas y el conocimiento avanzado para obtener mejores resultados</li>
          </ul>
          <br></br>
          <p><strong>¡Es el momento de tomar una decisión!</strong></p>
          <p>Puedes seguir haciendo lo que has venido haciendo, pero ya sabes que resultados vas a obtener.</p>
          <p>Pregúntate si es realmente lo que quieres lograr.</p>
          <p>Entonces, “Haz algo diferente, y obtendrás un resultado diferente”. Finalmente comienza a cubrir más vacantes a tiempo con candidatos calificados.</p>
          <p>¿Qué quieres realmente para ti?, esto es lo que tienes que hacer:</p>
          <p>Haz Click en el botón de abajo para agendar una llamada de 15 min conmigo. En esta llamada, vamos a discutir sobre las metas de reclutamiento de tu empresa y sobre tu proceso actual para poder identificar procesos de mejora y diseñar el <strong>Bootcamp de Marketing Digital</strong> apropiado para tu equipo de reclutadores.</p>
        </div>
      </div>
      <div style={{textAlign: "center", marginTop: '6%'}}>
        <hr style={{width: '30%', backgroundColor: '#f2c924'}}></hr>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">¡Agenda tu llamada ahora!</button>
        </div>
        <iframe title="cnsulta" type="text/html" frameborder="0" class="video" src="https://www.youtube.com/embed/ocnVgFj36cY" allowfullscreen></iframe>
      </div>
    </div>
    )
  }
} 

export default Consulta