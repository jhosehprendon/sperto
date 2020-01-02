import React from 'react';
import '../css/Blog.css';
import ModalAsk from './ModalAsk';

class ArticuloLeadMagnet extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  openModal = () => {
    this.refs.child.openModal();
  }
  
  render() {
    return ( 
      <div>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../images/reclutadores-vendedores.png')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>Que debe tener un Lead Magnet para atraer a tus Futuros Clientes</h1>
          <h3 className="blog-date">Published on December 30, 2019</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Como marketer, me he dado cuenta de la importancia que existe en crear una relación con un potencial cliente. Así podemos ganar su confianza y construir credibilidad antes de venderle algo. La mejor manera de comenzar este proceso es dando información de valor, un Lead Magnet.</p>
            <p>El Lead magnet debe ayudar a resolver un problema específico y relevante para tu potencial cliente. Una vez que consuma el contenido es necesario que pueda experimentar un especie de victoria, gracias a ti.</p>
            <p>Déjame contarte como lo hacían en un consultorio quiropractico. Una vez que recibían una llamada de un potencial cliente, se usaba un cuestionario donde vía telefónica le pedían al paciente realizar algunas maniobras, como: suba su brazo izquierdo. Siente dolor? Ahora su brazo derecho. Siente dolor?...Ahora doble su pierna derecha hacia al frente. Siente dolor?... y así con otras indicaciones. Lo cual permitía hacer una pequeña valoración vía telefónica, determinar si era viable el procedimiento quiropráctico y además le daban una recomendación para aliviar el dolor momentáneamente. Así el paciente era capaz de experimentar un poco de lo que serían capaces de hacer por aliviar su dolor.</p>
            <p>Este no es un ejemplo de un lead magnet digital, pero funciona de la misma manera. Su objetivo principal es iniciar esa relación con tu potencial cliente, al darte a conocer como su guía, alguien que puede resolver sus problemas y ayudar a cumplir sus objetivos.</p>
            <p>No importa la industria a la cual pertenezcas, la gente quiere conocer mas de ti antes de pagar por tu servicio o producto. Quieren algún tipo de garantía de que no van a perder su dinero, quieren asegurarse si realmente eres el indicado para resolver su problema.</p>
            <p>Una vez definido el problema que vas a resolver de tu potencial cliente, debes tener en cuenta estas cuatro características para crear tu perfecto Lead Magnet.</p>
            <ul>
              <li>Debe ser <strong>CORTO</strong>, no debe tomar más de 4 minutos para consumirlo. Puede tener formato escrito, de audio o video, normalmente lo ofrecemos en forma de guía PDF (5 páginas máximo) o un video de no más de 4 minutos.</li>
              <li>Debe ser <strong>EJECUTABLE</strong>, una vez que el prospecto consuma el lead magnet este debe estar en la capacidad de poner en práctica lo aprendido. Por esa razón debemos de mostrar lo necesario para que nuestro potencial cliente pueda aplicar y experimentar resultado, cuando digo lo necesario es que no debemos dar todo el secreto de nuestra receta, porque luego no tendremos nada que vender. </li>
              <li>Debe estar <strong>ORIENTADO A UN OBJETIVO</strong>, definir que va a lograr nuestro potencial cliente una vez consuma la información y expresarlo de una forma clara. Por ejemplo: aumentar sus ventas, bajar de peso, sentirse mejor, tener un nuevo conocimiento, etc.</li>
              <li>Y finalmente debe ser <strong>FÁCIL</strong> de consumir. Un PDF o un video corto son fáciles de consumir, pero un Webinar por ejemplo no lo es. Mucha gente se confunde y presenta un Webinar o un Free trial como lead magnet, cuando el potencial cliente necesita dedicar mucho más tiempo para consumir el contenido y en algunos casos tiene hasta que descargar algún software. El compromiso es más grande, por lo tanto no es considerado un lead magnet sino un Tripwire. (En futuros post hablaremos más de este).</li>
            </ul>
            <p>Otro objetivo del Lead Magnet es crear una lista de contactos. Funciona como un intercambio, para que puedan recibir la información deben dejar sus datos de contacto como nombre y correo electrónico, en algunos casos se pide numero telefonico u otra información personal, según sea relevante para tu empresa.</p>            
            <p>En muchos casos esto genera fricción para que el potencial cliente, pero funciona también como filtro para obtener solo los leads que de verdad están interesados en lo que le ofreces.</p>
            <p>Para comenzar a colectar leads, necesitamos construir una página (Landing Page) que le permita al prospecto ingresar los datos que solicitamos y obtener el contenido que ofrecemos. La página debe ser sencilla y debe explicar en pocas palabras que va a obtener el prospecto al dejarnos sus datos de contacto en un formulario.</p>
            <p>No es necesario tener conocimientos avanzados de desarrollo web para construir una página de generación de leads. Existen softwares que te permitirán hacerlo sin tener habilidades de programación.</p>
            <p>Lo primero que necesitas es un constructor de landing pages: Leadpages, Clickfunnels, Unbounce son algunos de los más conocidos pero existen otros softwares que te van a permitir cumplir con este objetivo.</p>
            <p>El lead magnet es un recurso que es muy importante para comenzar nuestra relación con el prospecto y debe estar diseñado de una forma que tenga valor y funcione como una introducción para lo que podemos ofrecer. Este debe dejar al prospecto queriendo más de ti y posicionándote como un líder en la industria. Eventualmente, este potencial cliente va a querer lo que ofreces y va a decidir comprar sin necesidad de presionarlo.</p>
            <p>El Marketing ganador es aquel que crea relaciones con contenido de valor. Hemos ayudado a numerosos clientes a diseñar una estrategia que les permita sacar más provecho de sus clientes y a ejecutar Facebook Ads de manera satisfactoria. También podemos ayudarte!</p>
            <div style={{margin: '10px 0 20px 0'}}>
              <button onClick={this.openModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="btn btn-success">Agenda una Llamada</button>
            </div>
          </div>
        </div>
        <ModalAsk ref="child"/>
      </div>
    )
  }
} 

export default ArticuloLeadMagnet