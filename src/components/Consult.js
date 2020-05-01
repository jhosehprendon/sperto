import React from 'react';

class Consult extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sendCalendly = () => {
    window.location.href = "https://calendly.com/jhosehp-rendon/30min"
  }

  render() {
    return ( 
      <div>
      <div className='consulta-block'>
        <h1 className='consulta-title'>Grow your Business with a Smart Marketing System</h1>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Free Evaluation Call</button>
        </div>
        <div style={{fontSize: '25px'}} className='blog-content'>
          <p>If you are spending money on Marketing but you are not getting enough sales... if Facebook and Instagram are no longer working and you fear your business won't be sustainable any more... Then this message is for you.</p>
          <p>Or... if you are launching a new product or project... this message is also for you.</p>
          <p>The "Smart Marketing System” is what your business needs to get more clients. You could increase your sales, be profitable and grow your business predictably.</p>
          <p>But you have to know that if you decide not to do something about your marketing strategy, nothing will change. You will continue losing money with no results.</p>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Free Evaluation Call</button>
          </div>
          <p>What the majority do when Facebook stops working, is testing new images/videos, new audiences... Or in some cases they decide to hire a new agency. But the real problem remains:</p>
          <ul>
              <li>High costs per lead or sales</li>
              <li>Low conversion volume</li>
              <li>Literally, money is thrown to the trash without results</li>
              <li>So, your business objectives are not achieved</li>
          </ul>
          <br></br>
          <p>The problem is more strategic than tactic.</p>
          <h2>We have found how businesses can generate more conversions through Facebook and Instagram Ads.</h2>
          <p>There is a formula that works, here is the story:</p>
          <p>In the past 6 years, I have helped several businesses to execute Facebook and Instagram ads. In most cases, I got good results, but in some cases the story was different. It didn't matter what changes I did: testing new images, videos, audiences, I couldn't improve the results. It was frustrating, that is why I understand.</p>
          <p>But that gave me the determination to improve the approach to marketing. I call it the "Smart Marketing System”, its philosophy is used by successful companies and marketers.</p>
          <p>This system has worked in my clients and will work in your business too.</p>
          <p><strong>Finally, it is your turn!</strong></p>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Free Evaluation Call</button>
          </div>
          <p>When you put to work the <strong>Smart Marketing System</strong> you will:</p>
          <ul>
            <li>Reduce costs and get more conversions</li>
            <li>Increase sales predictably</li>
            <li>Build a community loyal to your brand</li>
          </ul>
          <p><strong>It is decision time!</strong></p>
          <p>Click the button below to book a 30 min Free Evaluation call with me. During this call, we will find opportunities, improvements and we will plan your Smart Marketing System.</p>
        </div>
      </div>
      <div style={{textAlign: "center", marginTop: '6%'}}>
        <hr style={{width: '30%', backgroundColor: '#f2c924'}}></hr>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button onClick={this.sendCalendly} type="button" style={{marginBottom: '20px', fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Free Evaluation Call</button>
        </div>
      </div>
    </div>
    )
  }
} 

export default Consult