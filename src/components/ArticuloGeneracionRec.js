import React from 'react';
import '../css/Blog.css'

class ArticuloGeneracionRec extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return ( 
      <div>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../images/reclutador2.0.png')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>Conoce la Nueva Generación de Reclutadores 2.0</h1>
          <h3 className="blog-date">Published on November 12, 2019</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Uno de los secretos mejor guardados de grandes empresarios y compañías exitosas es el constante aprendizaje. Dedican parte de su tiempo en mantenerse actualizado, conocer las estrategias que están funcionando y aplicarlas a su entorno. </p>
            <p>La realidad es que la mayoría de los reclutadores son grandes profesionales con experiencia en su área, tienen todo el conocimiento para cumplir con las metas y además están equipados con herramientas sofisticadas que, en teoría, debería optimizar el proceso, pero les falta algo.</p>
            <p>Algo para obtener cambios en su proceso y mejorar sus resultados. </p>
            <p>Sabemos por demás la competitividad del mercado. Alta demanda y poco talento de calidad para cubrir las vacantes. </p>
            <p>Pero eso no detiene a esta nueva generación de reclutadores, les da impulso para mejorar su proceso y por tanto sus resultados. Están hambrientos de conocimientos y técnicas que los convierta en lideres en su sector.</p>
            <p>Sin embargo, vemos que las empresas están mas enfocadas en equipar a sus reclutadores con sistemas sofisticados como Applicant Tracking Systems hasta costosas publicaciones en portales de trabajo. Pero no se han dado cuenta que su mayor necesidad esta en darle las herramientas adecuadas para atraer y establecer una conversación con talento de calidad. </p>
            <p>El primer contacto de los reclutadores con los candidatos es el mas importante. Si este paso no existe, no habrá mas proceso. Entonces de que vale tanta inversión. </p>
            <p>Con el Marketing Digital podemos llegar a muchos candidatos de una forma mas amigable, donde se cree una relación de interés y confianza, en pocas palabras crear una imagen deseable y posicionar nuestra marca como empleador de alta categoría.</p>
            <p>En la mayoría de las industrias existe un equipo de ventas, el departamento de marketing es clave para conseguir el éxito, por esa razón trabajan en conjunto para lograr una meta en común: Hacer crecer a la empresa. Sin un proceso de marketing efectivo, los vendedores y los reclutadores están destinados a fracasar.</p>
            <p>El proceso de marketing efectivo tiene los mismo fundamentos y se aplica para cualquier industria. No debemos vender algo en el primer punto de contacto, debemos construir una relación para ganar confianza y luego proceder a la venta. Es muy similar a las relaciones humanas: No deberíamos pedir matrimonio en la primera cita, seguramente te dirán que NO. Debemos ser pacientes y crear una relación.</p>
            <p>Vemos como los reclutadores están pidiendo matrimonio sin haber establecido una conversación. La reputación de los reclutadores en la comunidad de desarrolladores esta por el piso.</p>
            <p>Es necesario equipar a nuestros reclutadores con conocimiento, técnicas y estrategias de marketing efectivo para que esto no vuelva a ocurrir.</p>
            <p>Me gustaría conocer sobre tu empresa y proceso de reclutamiento. Quisiera escuchar sobre tus dificultades y retos, porque la solución existe, solo debemos comenzar a implementarla. Con un sistema de marketing adecuado podemos lograr los objetivos de tu empresa.</p>
            <p>Te invito a agendar una llamada de 15 min conmigo haciendo click abajo:</p>
            <a href="http://www.spertomedia.com/consulta">Agendar Consulta</a>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloGeneracionRec