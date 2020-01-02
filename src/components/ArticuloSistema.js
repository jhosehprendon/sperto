import React from 'react';
import '../css/Blog.css';
import ModalAsk from './ModalAsk';

class ArticuloSistema extends React.Component {
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
          <img className="blog-image" alt="sperto" src={require('../images/sistema.png')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>Cómo mantenerte competitivo en Facebook Ad y lograr más ganancias</h1>
          <h3 className="blog-date">Published on January 1, 2020</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Últimamente he escuchado muchos marketers quejarse sobre lo difícil que se ha vuelto mantener los costos en Facebook Ad. Cuando antes se podía conseguir conversiones y ventas a un costo rentable, ahora parece ser imposible.</p>
            <p>Muchos negocios están perdiendo dinero en Facebook, sus campañas están siendo más costosas de lo que eran. Por lo que intentan optimizar cada detalle y nivel de la campaña, sin logran bajar los costos. Es entonces cuando se apodera la frustración al no poder mantener los números para ser competitivos en el mercado.</p>
            <p>He visto negocios dejar de funcionar y otros estar al borde de la quiebra por esta situación. Mi meta es enseñarte qué hacer para evitar un final trágico en tu negocio y conseguir resultados rentables de manera automática y predecible.</p>
            <p>Este nuevo comportamiento en Facebook se debe a un aumento en la demanda de marketers y el inventario disponible en Facebook. Lo que quiero decir es que cada vez hay más empresas pagando por publicidad en la plataforma y el número de usuarios se ha mantenido relativamente estable, por tanto, los precios de publicidad aumentan y debes invertir más para poder ser visto.</p>
            <p>Antes de que dejes de intentarlo con Facebook, quiero contarte la estrategia que puedes utilizar para seguir siendo rentable en la plataforma, crecer tu negocio, y mejor aún obtener clientes que compren no una sino varias veces tu producto o servicio.</p>
            <p>El “Customer Value Optimization”, es el sistema que debes comenzar aplicar en tu negocio. Te permitirá crear una relación de confianza con tu potencial cliente y aumentar el ingreso por cada nuevo cliente. </p>
            <p>En vez de recibir $20 por cada nuevo cliente, que tal si pudieras recibir $150. De esta forma podrías pagar más por cada conversión en Facebook.</p>
            <p>Este escenario es real, no estoy creando ilusiones que no pueden ser cumplidas. Las empresas exitosas que dominan el mercado y Facebook ads aplican esta metodología en detalle. Y todo funciona porque hay un sistema que corre automáticamente y que te permitirá maximizar el ingreso que obtienes por cada cliente.</p>            
            <p>Cada dia veo como las empresas pretenden generar una venta sin haber creado una relación con el prospecto, y más en Facebook una plataforma social donde queremos compartir con nuestros amigos, conectar con noticias, entretenernos o aprender nuevas cosas.</p>
            <p>O es que vamos a Facebook con la tarjeta de crédito en la mano con la intención de hacer una compra? Entonces, debemos conectar de una forma mas amigable con nuestro potencial cliente.</p>
            <p>El lead magnet es una pieza de contenido descargable como PDF, audio o video que ofrece algún tipo de valor al prospecto. Luego le ofrecemos un tripwire que contiene aún más valor, pero pide un mayor compromiso a cambio. Así, poco a poco vamos construyendo la relación que necesitamos para ofrecer nuestro producto principal. Idealmente, el prospecto pedirá comprar tu producto y nunca existirá una venta presionada de nuestra parte.</p>
            <p>Luego entra en el juego un elemento muy importante del sistema: el “Maximizador de Ganancias”. El gran impacto ocurre en este punto, la mayoría de las empresas se quedarán conformes con la venta del producto principal generando $X. Pero qué tal si podemos generar $5X?</p>
            <p>Hemos trabajado muy duro por construir una relación y generar esa primera compra, por qué parar? Con el maximizador de ganancias podemos ofrecer “oder bumps”, “cross sells”, “upsells” e inclusive motivar a repetidas compras.</p>
            <p>Si aplicas el CVO en tu estrategia podras sacar mas provecho (ganancias) de cada cliente, esto nos va a permitir darnos el lujo de invertir más en Facebook u otra plataforma mientras que la competencia se enfoca en hacer cambios insignificantes de la campaña que terminan en frustraciones.</p>
            <p>Hemos ayudado a numerosos clientes a diseñar una estrategia para obtener más clientes y más ventas de ellos. También podemos ayudarte!</p>
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

export default ArticuloSistema