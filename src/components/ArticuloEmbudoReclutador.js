import React from 'react';
import '../css/Blog.css';
import '../css/Home.css';

class ArticuloembudoReclutador extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return ( 
      <div style= {{width: '90%'}}>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../images/embudo-candidato.png')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>El camino que deben seguir tus candidatos IT en el proceso de reclutamiento.</h1>
          <h3 className="blog-date">Published on November 12, 2019</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Si eres usuario frecuente de Linkedin de seguro habrás leído mas de un comentario acerca de procesos de reclutamiento desorganizados, muy largos, poco personalizados que no concluyen en nada, donde el candidato siente que perdió el tiempo. </p>
            <p>Ciertamente la idea del reclutador, debe ser atraer al candidato con un proceso amigable, donde ambos se beneficien. Esto se logra con un sistema de embudo de venta, y toda estrategia de Marketing exitosa cuenta con una.</p>
            <p>Te explico, en el embudo de venta, el prospecto va a pasar por distintos puntos de contacto donde debe tomar una acción. Con cada paso dentro del embudo, se va construyendo una relación y afianzando la confianza. Con esto se aumentan las probabilidades de que realiza la acción final de compra, o en tu caso de aceptar y completar la oferta de trabajo. </p>
            <p>Y es que el proceso de compra es mas complejo de lo que imaginamos, como seres humanos compramos o seguimos a gente o marcas con las que nos identificamos o confiamos. </p>
            <p>Solo ve tus redes sociales, o piensa un poco los productos que consumes. Nos da tranquilidad seguir y comprar de aquellos en quien creemos. </p>
            <p>Entonces la idea con este embudo, es ganar una comunidad de candidatos de calidad que reconozcan tu marca o empresa y ademas confíen en ti. Esto hará la diferencia. </p>
            <p>El embudo de venta esta conformado por 5 etapas principales:</p>
            <ul>
                <li><strong>Awareness:</strong> Aquí normalmente informamos o educamos a la audiencia de sus retos o problemas. Es algo como abrirle los ojos de lo que esta ocurriendo y de los retos que tiene.</li>
                <li><strong>Interest:</strong> Hablamos de las posibles soluciones y de cómo puede usarlas para cumplir con sus metas.</li>
                <li><strong>Consideration:</strong> Aquí damos más detalles sobre nuestra propuesta.</li>
                <li><strong>Conversion:</strong> Damos el primer paso para que el prospecto pueda comprar lo que ofrecemos.</li>
                <li><strong>Advocacy:</strong> Una vez que tenemos un cliente satisfecho, este se vuelve nuestro embajador al referirnos.</li>
            </ul>
            <p>¿Pero cómo podemos visualizar el embudo de ventas en el proceso de reclutamiento?</p>
            <p>Primero debemos conocer a nuestro potencial candidato definiendo la “Persona” no sólo en lo técnico. Luego de haber recibido los requerimientos técnicos de la vacante debemos también entender sus preocupaciones profesionales y personales para así saber que mensaje usar y en que plataforma encontrarlos.</p>
            <p>Luego procedemos a <strong>Atraer al Candidato.</strong> Aquí usaremos un Lead Magnet, que funciona como un imán. Ofrecemos una pieza de información de interés con el fin de obtener a cambio su información de contacto (Email, Nombre).</p>
            <p>Una variante al Lead Magnet, que discutimos en nuestros cursos, es crear una comunidad en Slack que ofrezca información de valor y que permita la interacción entre sus miembros. A esto lo llamamos la estrategia del Caballo de Troya que nos permite entrar en contacto con nuestros potenciales candidatos ofreciendo algo primero de valor.</p>
            <p>El siguiente paso es construir una relación con nuestra marca, donde se gane confianza antes de ofrecer la vacante. Esto se logra con una <strong>Secuencia de Mensajes</strong> con información de valor, podemos informar sobre nuestros proyectos, retos y soluciones que hemos encontrado. En general, informacion relevante para nuestros miembros.</p>
            <p>Luego viene la etapa de <strong>Consideración</strong>, aquí filtramos aquellos candidatos que han mostrado interés y han conectado con todo lo que hemos compartido. A ellos le ofrecemos una <strong>Llamada de reconocimiento</strong> que nos permitirá conocer más sobre ellos. La idea aquí es escuchar y conocer sus intereses personales y profesionales para ser de ayuda y encontrar la mejor vacante que se ajuste.</p>
            <p>Finalmente, hacemos la <strong>Llamada de la oferta</strong> donde vendemos la oportunidad reforzando todo lo que puede obtener basándonos en los intereses que ya conocemos.</p>
            <p>Para un candidato lo más importante es saber qué hay en esa empresa/posición para él. Es de mayor importancia su progreso profesional, oportunidades y retos, que los intereses de la empresa.</p>
            <p>Con tantas ofertas que le llega a un programador semanalmente, se pueden dar el lujo de analizar y ver la mejor opción que representa para su carrera y su familia. </p>
            <p>Seguramente habrás visto algún post de tus reclutadores quejándose de que perdió su tiempo con un candidato para que finalmente eligiera otra oferta.</p>
            <p>Si combinamos estrategias efectivas de marketing digital con la experiencia de los reclutadores podemos llenar mas vacantes con talento de calidad.</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloembudoReclutador