import React from 'react';
import Card from './Card';
import Modal from 'react-modal';
import ModalAsk from './ModalAsk'
import '../css/Home.css' 

class Home extends React.Component {

  state= {
    modalIsOpen: false
  }

  componentWillMount() {
    Modal.setAppElement('body');
}

  openModal = () => {
    this.refs.child.openModal();
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Accelerate Your Revenue Growth with Facebook and Instagram Ads</h2>
              <h3 className='home-first__subtitle'>Improve your Marketing Strategy and Grow Your Business</h3>
              <button onClick={this.openModal} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Let's Work Together</button>
              <ModalAsk ref="child"/>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '1%' }}>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p className="banner-first">We Help Internet-based Businesses Improve their Marketing Strategy so they can Grow Faster with Facebook and Instagram Ads</p>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>What we Do</h2>
          {/* <p style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>Consigue Talento Calificado, Rapidez y Diversidad</p> */}
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <div className="row" style={{paddingTop: '3%'}}>
            <div className="info-block">
              <div className="first-card">
                <Card>
                  <div style={{margin: '10px 0 10px 0px'}}>
                    <div>
                     <h5 style={{color: '#295b8d'}}>Marketing Strategy</h5>
                    </div>
                  </div>
                  <div style={{margin: '10px 0 10px -15px'}}>
                    <ul>
                      <li>Clarify your Message</li>
                      <li>Define your Buyer Persona</li>
                      <li>Build a Sales Funnel</li>
                      <li>Build a Brand</li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div style={{margin: '10px 0 4px 0px'}}>  
                    <div>
                      <h5 style={{color: '#295b8d'}}>Paid Ads</h5>
                    </div>
                  </div>
                  <div style={{margin: '10px 0 10px -15px'}}>
                    <ul>
                      <li>Facebook/Instagram Ads</li>
                      <li>Conversion Rate Optimization</li>
                      <li>Paid Traffic Management</li>
                      <li>Campaign Scaling</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ backgroundColor: '#295b8d', paddingBottom: '2%' }}>
          <h2 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: '4%', marginTop: '4%'}}>Que dicen nuestros clientes</h2>
          <hr style={{backgroundColor: 'white', width: '80px'}}></hr>
          <div style={{paddingTop: '2%', margin: 'auto', width: '65%'}}>
            <CardTestimonial content='"It was a real pleasure working with Jhosehp, he is really knowledgeable about Facebook Ads and brought great results"' author="Iliana Ortiz, Lodgify - Barcelona"/>
            <CardTestimonial content='"Jhosehp was extremely quick in getting to work and provided invaluable insights and help setting up my facebook campaigns. Will definitely work with him again"' author="Joe Lauder, Satta Ltd - London"/>
          </div>
        </div> */}
  
        <div style={{ backgroundColor: 'white', padding: '3%' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>We Believe in the Power of Marketing to Build Relationships and Profit<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
        </div>
        <div className='home-fourth' style={{height: '350px'}}>
          <div className="over">
            <div className="container">
              <div className="row">
                <div className="col imageBackground2" style={{marginTop: '5%'}}>
                  <img style={{width: '75%'}} alt="sperto" src={require('../images/background.png')} />
                </div>
                <div className="col" style={{ paddingTop: '6%', color: 'white', fontSize: '18px'}}>
                  <h2 style={{padding: '0 0 5px 30px', fontSize: '30px'}}>Let's Define a Winning Strategy to help you get the most out of Facebook and Instagram</h2>
                  <div style={{paddingLeft: '30px'}}>
                    <button onClick={this.openModal} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Let's Work Together</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
          <a onClick={this.openModal} style={{color: '#283d54', cursor: 'pointer'}}>Contact Us to Help you Grow your Business</a>
          <br/>
          {/* <a style={{fontWeight: 'bold', cursor: 'pointer'}}  onClick={this.sendNosotros}>About Us</a> */}
        </div>
      </div>
    )
  }
} 


export default Home