import React from 'react';

class GraciasJoinList extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToPack5 = () => {
    window.location.href = "https://www.spertomedia.com/checkout/pack-5"
  }

  render() {
    return ( 
      <div>
        <div className='consulta-block'>
          <div style={{fontSize: '25px', color: '#283d54'}} className='blog-content'>
            <h1 style={{marginBottom: '30px'}}>Yeah! You Are Now Part of Something Game Changer</h1>
            <h1>We will do our best to contact your company to teach them how to pay you in Bitcoin or Crypto</h1>
          </div>
        </div>
      </div>
    )
  }
} 

export default GraciasJoinList