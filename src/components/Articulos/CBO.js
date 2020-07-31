import React from 'react';
import '../../css/Blog.css';
import history from '../../history';

class CBO extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return ( 
      <div>
        <div className='blog-block'>
          <h1 className='blog-title' style={{textAlign: 'center', margin: '50px 0', color: '#295b8d'}}>CBO es lo que Viene en Facebook… Tienes que Saber cómo Funciona para Obtener Resultados</h1>
          <hr></hr>
          <div className='blog-content'>
            <p>CBO (Campaign Budget Optimization) es una de las actualizaciones más importantes que ha hecho Facebook en los últimos años. Este cambio ha impactado, y va a impactar a miles de negocios, por eso es importante conocer en detalle cuáles son los cambios y cómo podemos sacar provecho de la nueva tecnología.</p>
            <p>Si te sientes frustrado por este nuevo cambio... si ya te has visto afectado, no te preocupes que este artículo te ayudará a comprender más el sistema.</p>
            <p>En realidad CBO tiene mucho potencial! Nos puede ayudar a escalar nuestras campañas más rápido, conseguir resultados más consistentes y nos puede ahorrar tiempo de trabajo.</p>
            <p>Dicho esto, es importante:</p>
            <ul>
              <li>Ajustar tus campañas a las mejores prácticas de CBO.</li>
              <li>Darle suficiente tiempo en las fases de prueba para alimentar a Facebook de información.</li>
            </ul>
            <h2 style={{marginTop: '30px'}}>Así Funciona el CBO</h2>
            <p>CBO, o Campaign Budget Optimization, usa inteligencia artificial para ajustar automáticamente cuanto gastas a nivel de audiencia, en vez de a nivel de anuncio.</p>            
            <p>Recuerda que una <strong>campaña</strong> esta estructurada por el nivel <strong>audiencia</strong> y en cada audiencia tenemos diferentes <strong>anuncios</strong> que probamos... Son tres niveles.</p>
            <p>Anteriormente definíamos el presupuesto de nuestras campañas a nivel de audiencia, de esa manera Facebook distribuía el presupuesto en cada anuncio…Con este cambio estamos haciendo lo mismo pero un nivel superior...</p>
            <p>Con CBO definimos el presupuesto a nivel de campaña y el presupuesto es distribuído en cada audiencia creada.</p>
            <p>Esta imagen puede ayudar a entenderlo mejor.</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/1_cbo.png')} />
            </div>
            <p>En la izquierda tienes el modelo viejo, donde definíamos el presupuesto a nivel de audiencias. $10 por cada audiencia y cada uno tiene el mismo presupuesto.</p>
            <p>El resultado, son 10 conversiones en total (compras o leads)... No todos tuvieron la misma efectividad.  Por ejemplo la audiencia 1 (Ad Set 1) obtuvo 5 conversiones a $2 cada una mientras que el Ad Set 3 obtuvo 2 conversiones a $5 cada una.</p>
            <p>En la lado derecho, CBO, se fijó un presupuesto a nivel de campaña de $30 y Facebook se encargo de ubicar automaticamente el presupuesto en cada audiencia.</p>
            <p>El resultado fue que la audiencia mas efectiva (Ad Set 2) recibió el mayor presupuesto ($18). Las otras dos solo recibieron $5 y $7... Lo que produjo 15 conversiones en vez de 10.</p>
            <p>Espero que hasta este punto este claro como funciona el CBO... pero hay otro aspecto que es mas confuso... Veámoslo a continuación.</p>
            <h2 style={{marginTop: '30px'}}>No Pauses esa Audiencia!</h2>
            <p>Digamos que luego de unos días de haber lanzado la campaña obtienes estos resultados:</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/2_cbo.png')} />
            </div>
            <p>La mayoría pensaría... Facebook esta convirtiendo a un CPA más barato. Entonces por qué Facebook esta invirtiendo más en Instagram?</p>
            <p>La respuesta esta en el efecto <strong>Breakdown</strong>.</p>
            <p>Primero, debes entender que tu CPA (Cost per acquisition) siempre incrementa a medida que pasa el tiempo. Esto ocurre porque Facebook primero busca a las personas que tienen alas probabilidades de convertir. Luego de que cubre toda esa población, quedan las que son más costosas.</p>
            <p>Segundo, es importante que los CPA de la imagen anterior son promedio. No te dan la vision completa de lo que esta ocurriendo.</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/3_cbo.png')} />
            </div>
            <p>De la gráfica anterior puedes observar que Facebook comenzó teniendo mejor CPA pero a medida que se fue invirtiendo mas presupuesto, los papeles cambiaron... El algoritmo cambió de preferencia y comenzó a invertir más en Instagram.</p>
            <p>Pero, por qué es importante entender esto?</p>
            <p>Imagina que hubiese pasado si se pausa la audiencia con placement de Instagram en los primeros 3 días... Hubieses pensado que estas haciendo bien y optimizando tu campaña. Pero nunca le hubiésemos dado tiempo al algoritmo para hacer ese cambio efectivo.</p>
            <p>Por esto es importante, cuando usas CBO, no estar pausando audiencias (Ad Sets), incluso si tienen CPAs altos. Facebook eventualmente dejará de gastar en aquellos que no estan dando resultados.</p>
            <p>Espero que esta información sea útil y que hayas perdido el miedo al CBO. Estos cambios traen más beneficios que desventajas, solo debemos saber cómo funcionan para sacar provecho en nuestro negocio.</p>
            <p>Lo cierto es que debemos adaptarnos al cambio porque no tenemos la liberad de volver al método viejo... Facebook quiere ayudarnos y ha invertido muchos recursos para hacer el proceso mas efectivo y sencillo. Sé que es difícil cambiar, cuando ya nos hemos acostumbrado a un proceso... Pero créeme que vale la pena.</p>
            <p style={{marginTop: '40px'}}>Si quieres sabes cómo crear anuncios en Facebook e Instagram que convierten y generan millones, haz click en el botón de abajo para descargar la guía GRATIS que explica paso a paso cómo.</p>
            <div style={{textAlign: "center"}}>
            <div style={{textAlign: 'center'}}>
              <button onClick={() => history.push('/guia/perfect-ad')} type="button" style={{marginBottom: '40px', fontWeight: 'bold', padding: '12px' }} className="btn btn-lg btn-success">Descargar Guía</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default CBO
