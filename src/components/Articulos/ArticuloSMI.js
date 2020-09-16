import React from 'react';
import '../../css/Blog.css';
import history from '../../history';

class ArticuloSMI extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/30min"
  }
  
  render() {
    return ( 
      <div>
        <div className='blog-image-block'>
          <img className="blog-image" alt="sperto" src={require('../../images/sistema.png')} />
        </div>
        <div className='blog-block'>
          <h1 className='blog-title'>Conoce el Sistema de Marketing Inteligente, Vende más y Acelera el Crecimiento de tu Negocio</h1>
          <h3 className="blog-date">Published on January 20, 2020</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>Estamos viviendo tiempos muy difíciles, en sólo semanas hemos visto cómo ha cambiado nuestra forma de vivir y cómo muchos negocios han sido afectados.</p>
            <p>Si eres un emprendedor, dueño de negocio o director es muy probable que toda esta situación te mantenga preocupado e interesado en buscar soluciones para minimizar las pérdidas o mantener las ventas.</p>
            <p>La mayoría recorta sus gastos de marketing en tiempo difíciles, pero es un grave ERROR. Ahora es cuando existe más oportunidades…Más personas están conectadas online, usando redes sociales, consumiendo contenido y haciendo compras. Además, han bajado los costos de publicidad en plataformas como Facebook debido a que existe menos demanda de publicistas.. todos están pensando lo mismo, en reducir o eliminar gastos de marketing… Entonces, ahí es donde tenemos la oportunidad.</p>
            <p>Si lo haces correctamente, puedes obtener resultados en momentos difíciles y posicionarte como el líder de tu mercado para cuando todo esto pase. Todo esto se logra con un sistema de marketing que te va a permitir vender y crecer tu negocio de forma automática y predecible. Yo lo llamo “El Sistema de Marketing Inteligente”</p>
            <p>Este sistema lo hemos implementado con varios clientes y hemos obtenido resultados extraordinarios, inclusive mucho mejores en estos momentos. Por eso quiero compartirlo contigo.</p>
            <p>El objetivo del sistema es convertir desconocidos en amigos, amigos en clientes y clientes en promotores. Esto se logra de la siguiente manera:</p>
            <p><strong>Lead Magnet &gt; Tripwire &gt; Core Offer &gt; Profit Maximizer &gt; Remarketing</strong></p>
            <p>Hablemos de cada componente…</p>
            <h3>Lead Magnet</h3>
            <p>El lead magnet es el primer punto de contacto con tu prospecto y es muy importante diseñar uno que tenga sentido en tu embudo de marketing y tu negocio.</p>
            <p>Ahora, por qué usamos un lead magnet? Y qué es un lead magnet?</p>
            <p>El marketing funciona como las relaciones humanas. No podemos pedir matrimonio la primera vez que conocemos una persona, debemos comenzar construyendo una relación (tener varias citas, regalar flores, ser novios por un tiempo, etc).</p>
            <p>El lead magnet es tu primera conversación. Te permite obtener el email de tu prospecto calificado a cambio de algo de valor que ofreces. Normalmente es un video o un documento PDF que tiene algo interesante, algo de ayuda.</p>
            <p>Para un e-commerce, el lead magnet suele ser un cupón de descuento o algún tipo de incentivo que te permita colectar emails y además sea el primer paso para que el potencial cliente se anime a realizar la compra.</p>
            <p>Abajo puedes descargar una guía gratis donde explico los detalles de un lead magnet efectivo. La Fórmula Perfecta de un Lead Magnet Ganador que te va a permitir generar más ventas y acelerar el crecimiento de tu negocio.</p>
            <p>Nota: Voy a pedir tu email a cambio, estoy usando un lead magnet! Además de enseñarte la estructura de un buen lead magnet estoy poniendo en práctica lo que te enseño. Así puedes ver la estructura de la página, la forma cómo muestro la información y el proceso.</p>
            <div style={{textAlign: 'center'}}>
              <button onClick={this.sendCalendly} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Agenda una Consultoría Gratis</button>
            </div>
            <h3>Tripwire</h3>
            <p>Luego que tienes el email de un potencial cliente necesitas dar un paso más en la relación, generar un mayor compromiso. Este compromiso se logra normalmente con un intercambio pequeño de dinero o de tiempo.</p>
            <p>En negocios donde se vende productos físicos, el mejor Tripwire es vender un producto a un valor muy bajo. Por ejemplo, una empresa que vende guitarras (su producto principal), ofrece kit de uñas (piezas que permiten tocar) a un precio ridículamente bajo. Con esto no pretendemos generar ganancias ni construir nuestro negocio pero es un paso necesario que nos permite construir la relación.</p>
            <p>En el caso de negocios informativos (cursos, consultores, etc.) normalmente se ofrece un webinar, una mini clase, auditoría gratis, etc. En este caso la persona no necesita gastar dinero, pero estaría invirtiendo tiempo en nosotros.</p>
            <h3>Core Offer</h3>
            <p>No hay mucho que decir de esta etapa, tal cual como lo dice el término en inglés, aquí es cuando vendemos el producto principal. Es importante no saltarse los pasos anteriores, si has diseñado tu sistema de marketing adecuadamente, vas a poder ver conversiones en este punto y tus clientes serán de mayor calidad.</p>
            <h3>Profit Maximizer</h3>
            <p>No podemos quedarnos con una sola compra, de hecho muchos negocios comienzan a tener ganancias con el maximizador de ganancias (Profit Maximizer).</p>
            <p>En este punto ofrecemos “Order bumps”. Cuando el cliente esta haciendo la compra ofrecemos un extra que nos permite tener mayor ingresos. Por ejemplo, si vendemos un libro en $30 con un simple check el cliente puede también agregar la version audio por $20 más.</p>
            <p>También usamos “Bundles” que nos permite hacer una especie de upgrade. Por ejemplo, si vendemos un curso que contiene módulos básicos de marketing a $400, podemos ofrecer el modulo básico y avanzado por $1200.</p>
            <p>El tercero es un “Cross-sell”. Este lo hemos visto en Amazon, cuando compramos un producto la plataforma nos sugiere otros productos complementarios. Por ejemplo, si compro una laptop me aparecen ofertas de cases o bolsos.</p>
            <p>Cuarto es un “Up-sell”. Si vendemos un par de medias por $5, podemos ofrecer un pack de 10 medias por $40.</p>
            <h3>Remarketing</h3>
            <p>Qué pensarías si te dijera que hemos generado 1 millón de dólares en dos meses, invirtiendo 30mil dólares en Facebook ads con una campaña de remarketing?</p>
            <p>Son números extraordinarios y ciertos, pero es impresionante que muchas empresas no aprovechan las oportunidades del remarketing.</p>
            <p>Resulta que la gran mayoría de tu tráfico no convierte en la primera visita, es normal. En muchos casos necesitan un incentivo o mayor información para completar la compra, allí entra el remarketing.</p>
            <p>Por eso es importante tener el pixel de Facebook instalado y saber cómo crear audiencias de cada interacción relevante de tu embudo.</p>
            <p>Es importante darle importancia a todos los elementos del sistema, de esa manera vas a poder generar mayores ventas, acelerar el crecimiento de tu negocio, predecir tus ingresos y ganarle a la competencia.</p>
            <p>Comienza a construir tu Sistema de Marketing Inteligente con un Lead Magnet Ganador.</p>
            <div style={{textAlign: 'center'}}>
              <button onClick={this.sendCalendly} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Agenda una Consultoría Gratis</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloSMI