import React from 'react';

class PreLaunch extends React.Component {

  render() {
    return ( 
      <div className='blog-block'>
        <div className='blog-content'>
          <p>Hola,</p>
          <p>Estamos cerca de terminar el Plan de Marketing que han esperado muchos para impulsar sus negocios.</p>
          <p>Hemos trabajado en este sistema por casi un año, pero finalmente estamos listos para compartir esta gran herramienta. Lanzaremos en pocos dias.</p>
          <p>El Plan contiene todos lo elementos necesarios para impulsar tu negocio. Este plan será creado por mi y será personalizado para tu negocio.</p>
          {/* <p>Primero tendremos una llamada de evaluación, totalmente gratis, para determinar si tu negocio califica para aplicar el Plan de Marketing. Si tu negocio pasa la prueba, diseñaré un plan que te permitirá cumplir tus objetivos comerciales (Vender más y ser rentable!!!).</p> */}
          <p>Va a ser una guía que te llevará paso a paso en el proceso de ejecución. Voy a cubrir puntos relacionados con tu branding, creación del sales funnel y Facebook, Instagram Ads.</p>
          <p>Sin embargo, necesito tu ayuda. Este es un plan personalizado para cada negocio, entonces es importante saber si estamos cubriendo todo, incluyendo tus inquietudes y dificultades.</p>
          <p>Por favor tómate unos minutos para analizar y responder esta sola pregunta. Deja tu respuesta en la casilla de comentarios de abajo.</p>
          <p><strong>Pregunta:</strong> Cuáles son las mayores dificultades en tu proceso de marketing actual. Qué te impide aumentar las ventas, ser rentable y crecer tu negocio?</p>
          <hr></hr>
          <div style={{marginTop: '20px'}} class="fb-comments" data-href="https://spertomedia.com" data-width="" data-numposts="5"></div>
        </div>
      </div>
    )
  }
} 

export default PreLaunch