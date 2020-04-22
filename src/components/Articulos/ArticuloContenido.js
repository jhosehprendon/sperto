import React from 'react';
import '../../css/Blog.css';

class ArticuloContenido extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../../images/puzzle.jpg')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>Tu Contenido de Marketing</h1>
          <h3 className="blog-date">Published on March 17, 2020</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>El contenido que compartes con tu audiencia es todo lo que se ve de tu marca, desde artículos para tu blog, post en tus redes sociales y hasta lo que muestras en tu página web. Es decir, toda la experiencia que vive tu cliente con respecto a tu marca.</p>
            <p>Si eres asertivo con tu mensaje podrás acercarte a tu audiencia e influenciar en sus decisiones. Hacerlos sentir que puede mejorar su vida a través de tu contenido y más adelante con tu producto o servicio.</p>
            <p>Ese debe ser tu enfoque, usar el Marketing para el bien, para dar a conocer tu mundo, ayudar a tu audiencia a sentirse bien y ser mejores en relación a tu nicho.</p>
            <p>Por ejemplo, si estás en el negocio de salud, debes postear recetas o rutinas de ejercicios, dar contenido en tendencia, tips prácticos, inspiradores que ayuden a tu audiencia a cambiar su estilo de vida.</p>
            <p>Por eso, crear contenido no es solo escribir por escribir información relacionada a tu industria. Es hacerlo con conciencia, enfocados en el objetivo de crear interés, atracción de tu prospecto a tu marca.</p>

            <p>Es decir, crear una relación con tu audiencia que ame lo que dices y esperen escuchar de ti con frecuencia.</p>            
            <p>Para eso no tienes que ser un escritor profesional ni un productor con experiencia. Todos podemos escribir si tenemos una idea clara de lo que quieres transmitir. Con un poco de investigación y práctica puedes comenzar a producir contenido valioso para tu audiencia.</p>
            <p>Si estás listo y decidido a crear contenido de calidad y construir una audiencia enamorada de tu marca, te recomiendo con mucha fuerza seguir los siguientes principios:</p>
            <p>Tu contenido debe ser:</p>
            <ul>
              <li>
                Útil: ayudar a tu cliente a resolver un problema. Supongamos que estás en el negocio de la comida para mascotas, al dar una receta para hacer galletas caseras. Les ayudas a resolver un problema práctico enfocado en la alimentación de su mascota.
                <br/>No creas que al dar esta receta, estarás perdiendo la posibilidad que compren tu producto. Es un miedo muy común en el tema de compartir contenido.
                <br/>Cuando das, automáticamente se crea un sentimiento de gratitud y reciprocidad. Esta persona que hizo la receta de tus galletas. Te recordará y comprará tus otros productos, porque confía en ti, ya tuvo una experiencia agradable y asocia ese logro con tu marca.
              </li>
              <li>
                Inspiracional: Tu contenido debe inspirar a un cambio, una transformación positiva. Tu producto o servicio puede ayudar a estar más saludable, más alegre, con más energía, con mayor seguridad y conocimiento en un área. Sea cual sea tu producto o servicio debe estar destinado a mejorar la vida de tu cliente. Por eso, a través de tu contenido debes inspirar a esa transformación. Y esto no es con la venta directa, puedes lograrlo a través de casos estudios, historias de superación. Es más puedes  incluir tu propia historia (Una linda forma de exponerte con tus luchas, desaciertos y victorias. Siempre desde un enfoque constructivo). De esta forma el lector podrá sentirse identificado y motivado a que sí puede y más importante con deseo de vivir esa transformación.
              </li>
              <li>
                Por último, debes tener empatía. Quiere decir ponerse en los zapatos de tu prospecto. Reconocer sus dificultades, dolores y deseos. Es la mejor forma de conectar y lograr su atención.
              </li>
            </ul>
            <p>Con estos principios recomendados por Doug Kessler, crearás un contenido de calidad.</p>
            <p>Lo que se traduce en una audiencia de calidad, con un buen porcentaje de open rate, una audiencia interesada con una relación cercana a tu marca. Que a la larga estarán encantados en comprar cada producto o servicio que ofrezcas.</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloContenido