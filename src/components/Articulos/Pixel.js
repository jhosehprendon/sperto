import React from 'react';
import '../../css/Blog.css';

class CBO extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return ( 
      <div>
        <div className='blog-block'>
          <h1 className='blog-title' style={{textAlign: 'center', margin: '50px 0', color: '#295b8d'}}>Por qué es Importante Entrenar tu Pixel de Facebook y Cómo Hacerlo</h1>
          <hr></hr>
          <div className='blog-content'>
            <p>El objetivo principal de Facebook es mostrar tus anuncios a la audiencia indicada… aquella que va a reaccionar a tu call to action. Para poder lograrlo, Facebook creó el pixel...</p>
            <p>Suena un poco técnico pero créeme que no es nada complejo, y además es muy podderoso.</p>
            <p>El pixel es un script de código que debe estar incorporado en tu pagina web y este reporta a Facebook todo lo que ocurre en ella... Si alguien ha llegado a tu página, si ha hecho click a algún botón, si ha agregado al carrito de compra, comprado, etc.</p>
            <p>Todo marketer y dueño de negocio debe conocer los beneficios de usar el pixel de Facebook y saber su funcionamiento...</p>
            <p>Antes de siquiera lanzar tu nuevo emprendimiento, debes tener esta pieza de código instalada en tu pagina web o funnel... Es muy importante. Si comienzas a llevar trafico a tu página sin tener el pixel instalado, vas perder información valiosa cada día.</p>
            <p>Muchas personas no conocen el potencial del pixel… Este te permite llegar a personas que están mas calificadas y que tomarían acción en tu anuncio, haciendo que tu presupuesto sea gastado de manera más efectiva.</p>
            <p>Pero no solo eso, el pixel te permite optimizar tus campañas hacia un objetivo especifico, como por ejemplo compras, y además te permite medir las conversiones que vas obteniendo. De esa manera puedes determinar cuales audiencias o anuncios son los más efectivos.</p>
            <p>Pero el pixel necesita de tu ayuda...</p>
            <p>El pixel no puede comenzar a funcionar desde que lanzas una campaña. Este necesita de tiempo y data para poder optimizar los resultados.</p>
            <p>Esto significa que necesita tiempo y conversiones... Lo que llamamos proceso de “Entrenamiento”.</p>
            <p>Si has visto que tus campañas tienen el mensaje de “Learning Phase” o “Fase de Aprendizaje” es porque se encuentra en entrenamiento… y todavía necesita conseguir más conversiones para poder escalar la campaña.</p>
            <p>Es como un niño que va a la escuela y luego a la universidad... En sus inicios no tiene mucha información pero luego va a tener mucho conocimiento que va a aplicar en su vida laboral... Así mismo funciona el pixel.</p>
            <p>Durante el proceso de aprendizaje tu anuncio será visto por personas dentro de la audiencia que elegiste. Pero Facebook va a comenzar a ver quienes convierten, quienes toman acción en tu anuncio y poco a poco va a ayudarte a encontrar más como ellos.</p>
            <p>Cuando lances tu campaña debes definir el objetivo que es importante para la etapa especifica de tu funnel… y debes dejar que corra hasta tener al menos 50 conversions.</p>
            <p>En este punto debes tener paciencia y esperar que se cumplen las 50 conversiones. No cambies nada en la campaña, ni siquiera una letra del texto porque eso alterará la campaña... estarías confundiendo al Pixel.</p>
            <p>El tiempo que te tome va a depender del presupuesto que hayas elegido. Mientras más gastes, Facebook acelerará más el proceso.</p>
            <p>Solo puedes apagar o modificar la campaña, cuando hayas logrado las 50 conversiones o hayan pasado de 5-7 días.</p>
            <p>Felicidades! Has entrenado a tu pixel. Ya es hora de crear audiencias personalizadas.</p>
            <h2 style={{marginTop: '30px'}}>Creación de Audiencias Personalizadas</h2>
            <p>Digamos que la fase de aprendizaje fue optimizada para generar “Video Views” en tu campaña inicial y fuiste capaz de obtener mas de 50 conversiones. Ahora puedes crear una audiencia de quienes vieron el video para hacer retargeting.</p>
            <p>El primer paso es dirigirte a la opción de audiencias del menú principal. Luego haces click en “Crear Audiencia” > “Audiencia Personalizada”.</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/pixel-1.png')} />
            </div>
            <p>Luego tienes todas las opciones disponibles. En este ejemplo elegimos “Video”</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/pixel-2.png')} />
            </div>
            <p>Luego debes elegir el tiempo de duración que han visto el video. Esto depende de tu criterio pero normalmente yo escojo al menos 25%.</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/pixel-3.png')} />
            </div>
            <p>En “Choose videos” Puedes elegir los ads o inclusive videos de tus publicaciones orgánicas.</p>
            <div className='blog-image-block'>
              <img className="blog-image" style={{marginBottom: '40px'}} alt="sperto" src={require('../../images/pixel-4.png')} />
            </div>

            <p>Ahora estas listo para hacer retargeting a esas personas que han interactuado con tu video. Recuerda que en este ejemplo se uso un video pero puedes hacer lo mismo para quienes han agregado al carrito de compra pero no han completado la compra final... En este caso podemos incentivar con un cupón de descuento en otro anuncio.</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default CBO
