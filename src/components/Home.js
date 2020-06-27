import React from 'react';
import Card from './Card';
import '../css/Home.css' 
import history from '../history';

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendToConsulta = () => {
    history.push('/consult')
  }

  sendToSystem = () => {
    history.push('/sistema-smi/en')
  }

  sendToTool = () => {
    history.push('/interests-tool')
  }

  render() {
    return ( 
      <div>
        <div className='home-first'>
          <div className='home-first--flex over'>
            <div style={{marginRight: '10%'}}>
              <h2 className='home-first__title'>Sell More, Grow your Business, Be Profitable</h2>
              <h3 className='home-first__subtitle'>We Design and Execute Smart Marketing Systems that Works!</h3>
              <button onClick={this.sendToConsulta} type="button" style={{marginTop: '10px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Call</button>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ backgroundColor: '#9dccfa', padding: '3%', textAlign: 'center' }}>
          <p className="banner-first" style={{padding: '30px', display: 'inline'}}>Read more about the Smart Marketing System</p>
          <button onClick={this.sendToSystem} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-light">Read more</button>
        </div>
        <div style={{ backgroundColor: '#66b3ff', height: '10px' }}>
        </div>
        <div style={{ paddingTop: '4%'}}>
          <h2 style={{textAlign: 'center', color: '#295b8d', fontWeight: 'bold'}}>This is how we can help you</h2>
          <hr style={{backgroundColor: '#3a8dde', width: '80px'}}></hr>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '50%', margin: '5rem auto 0'}}>We help business owners sell more through a Smart Marketing System so they can build a scalable, predictable and profitable business.</p>
          <p style={{textAlign: 'center', color: '#295b8d', fontSize: '20px', width: '50%', margin: '1rem auto 0'}}>We are professionals at using Facebook and Instragram ads to feed the sales funnel and keep consistent results.</p>
          <div className="row" style={{paddingTop: '3%'}}>
            <div className="info-block">
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Ecommerce</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Lead Generation</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Services</h5>
                </div>
              </Card>
              <Card>
                <div style={{margin: '10px 0 4px 0px'}}>  
                    <h5 style={{color: '#295b8d', textAlign: 'center'}}>Info Products</h5>
                </div>
              </Card>
            </div>
          </div>
        </div>
  
        <div style={{ backgroundColor: 'white', padding: '3%', width: '68%', margin: 'auto' }}>
          <p style={{textAlign: 'center', color: '#283d54', fontWeight: 'bold', fontSize: '24px', margin: 'auto'}}><i className="fas fa-quote-left" style={{marginRight: '8px', color: '#f2c924'}}></i>We Believe in the Power of Marketing to Build Relationships and Profit<i className="fas fa-quote-right" style={{marginLeft: '8px', color: '#f2c924'}}></i></p>
        </div>
        <div className='home-fourth' style={{textAlign: 'center', padding: '40px 0 40px 0'}}>
          <h2 style={{fontSize: '30px', color: 'white'}}>Numbers don't lie</h2>
          <p style={{color: "white", fontSize: '20px'}}>What we care the most is our Client's Return of Investment</p>
          <img className='image-fb' alt="sperto" src={require('../images/en-screenshot.png')} />
          <p style={{color: "white", fontSize: '30px', fontWeight: 'bold'}}>2700% ROI</p>
        </div>

        <h2 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '50px', color: '#1F3144'}}>We have incresed sales and ROI to these companies</h2>

        <div className="row" style={{margin: '20px 0 50px 0'}}>
          <div className="info-block-fb">
            <img  style={{width: '8rem', marginRight: '40px'}} alt="sperto" src={require('../images/EN-logo.png')} />
            <img style={{width: '10rem', marginRight: '40px'}} alt="sperto" src={require('../images/MC-logo.png')} />
            <img style={{width: '10rem', marginRight: '40px'}} alt="sperto" src={require('../images/rize-logo.png')} />
            <img style={{width: '12rem'}} alt="sperto" src={require('../images/FR-logo.png')} />
          </div>
        </div>
        
        <div className='home-fourth' style={{height: '350px'}}>
          <div className="over">
            <div className="container">
              <div className="row">
                <div className="col imageBackground2" style={{marginTop: '5%'}}>
                  <img style={{width: '75%'}} alt="sperto" src={require('../images/background.png')} />
                </div>
                <div className="col" style={{ paddingTop: '6%', color: 'white', fontSize: '18px'}}>
                  <h2 style={{padding: '0 0 5px 30px', fontSize: '30px'}}>Let's put to work a Smart Marketing System to Grow your Business</h2>
                  <div style={{paddingLeft: '30px'}}>
                    <button onClick={this.sendToConsulta} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Call</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', textAlign: 'center', color: '#295b8d', padding: '40px' }}>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>Sperto Media</p>
          <a onClick={this.sendToTool} style={{color: '#283d54', cursor: 'pointer'}}>Facebook Interests Finder</a>
          <br/>
          {/* <a style={{fontWeight: 'bold', cursor: 'pointer'}}  onClick={this.sendNosotros}>About Us</a> */}
        </div>
      </div>
    )
  }
} 


export default Home