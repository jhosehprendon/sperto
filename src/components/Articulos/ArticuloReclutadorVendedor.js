import React from 'react';
import '../../css/Blog.css'

class ArticuloReclutadorVendedor extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return ( 
      <div>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../../images/reclutadores-vendedores.png')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>Si tus reclutadores saben vender, ganarás mas candidatos contratados.</h1>
          <h3 className="blog-date">Published on November 12, 2019</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Si tus reclutadores se encuentran trabajando en la búsqueda constante de candidatos calificados, envían diariamente mensajes a múltiples candidatos, y aun así no consiguen los resultados esperados. Esta es lo que necesitas leer para mejorar tus resultados.</p>
            <p>El término "Vender" no solo se refiere a la venta de un producto o servicio. En algún momento de nuestra vida nos ha tocado vender. Así sea una idea, un proyecto, una solución.</p>
            <p>A nuestra familia, nuestros jefes o subordinados. El éxito de la venta esta en el poder de persuasión, de poder transmitir la idea con motivación y que crean en ella.</p>
            <p>Cuando me refiero a los reclutadores como vendedores, es porque están vendiendo un cambio de vida al candidato y a su familia. Es aún mas importante que la venta de un producto como un par de zapatos o un vehículo.</p>
            <p>Existe un riesgo alto en cambiar de trabajo. Quizá esta persona ya se sienta cómoda donde está, su familia ya esta establecida en esa ciudad, su carrera profesional parece estar creciendo. Entonces, por qué cambiaria a esa nueva empresa que le acaba de contactar?</p>
            <p>Por eso se requiere un mayor trabajo en el proceso de venta donde es necesario:</p>
            <ul>
                <li>Crear una relación con el candidato,</li>
                <li>Ganar su confianza,</li>
                <li>Ofrecer la vacante con mayor probabilidades de éxito de "compra".</li>
            </ul>
            <p>Esta es la tarea del Marketing, por eso toda empresa que depende de las ventas, tiene un departamento de marketing que se encarga de conectar con su audiencia, crear conversaciones, dar información y finalmente filtrar a los contactos calificados para pasarlos al departamento de venta.</p>
            <p>Entonces, ¿por qué no existe un departamento de marketing para reclutadores? ¿Por qué no existe esa colaboración entre ambos equipos? O simplemente, ¿por qué no entrenar a nuestros reclutadores con el conocimiento necesario de marketing?</p>
            <p>Al final de este post quiero que veas a tu equipo de reclutadores como vendedores que necesitan del poder del marketing y un sistema que potencie sus habilidades.</p>
            <p>No hay duda de que la demanda por talento IT ha aumentado exponencialmente y el ambiente se ha vuelto más competitivo con el pasar de los años. Cada vez nacen más Startups y las empresas establecidas siguen creciendo exponencialmente. Con esto aumenta la necesidad de personal tecnológico calificado.</p>
            <p>Pero, ¿cómo podemos diferenciarnos y ganar esta guerra por candidatos?</p>
            <p>Las empresas están compitiendo por atraer y retener talento pero sólo ganan aquellas que aplican un proceso “Humano”. Aquellas empresas que aplican estrategias de marketing efectivas tienen una gran ventaja con respecto a la competencia.</p>
            <p>Estamos en una era digital que nos permite sobresalir y usarla a nuestro favor, pero también es una herramienta que los candidatos usan para saber sobre nosotros. Todo ha cambiado, ahora la pelota esta en la cancha de los candidatos y ellos tienen el poder de decisión.</p>
            <p>Y tienen todo el derecho de evaluar cada una de las opciones para elegir la mejor. Si una empresa fue poco personal y trato a sus candidatos como una mercancía, es lógico que no responda a los mensajes y elija la empresa que fue “Humana”, aquella que se dedicó a conocerle, y en presentar sus opciones desde su perspectiva e intereses.</p>
            <p>Pero no culpo a los reclutadores por el enfoque invasivo y poco efectivo que toman al momento de acercarse a los candidatos. No todos, pero la gran mayoría.</p>
            <p>Ellos no han sido entrenados con conceptos de marketing ni están equipados con las herramientas adecuadas.</p>
            <p>Pero esto es algo que debe cambiar. Como lo mencionamos arriba, los reclutadores deben ser vendedores y todo vendedor tiene un equipo de marketing que se encarga de crear relaciones, nutrir y filtrar prospectos para que el proceso de venta sea más eficiente.</p>
            <p>Mi objetivo es mejorar este proceso con el poder del marketing digital. Por eso he creado un sistema que te va a permitir:</p>
            <ul>
                <li>Equipar a tus reclutadores con herramientas y conocimiento que les permita ejecutar estrategias de marketing efectivas.</li>
                <li>Conectar con candidatos para crear relaciones.</li>
                <li>Crear una comunidad que este interactúe con tu marca.</li>
                <li>Generar interés en tus vacantes.</li>
                <li>Construir tu marca de empleador.</li>
            </ul>
            <p>Si quieres saber más puedes entrar a mi perfil: <a href="https://www.linkedin.com/in/jhosehp-rendon/">Jhosehp Rendón</a></p>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloReclutadorVendedor