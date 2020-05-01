import React from 'react';
import '../../css/Blog.css';

class ArticuloSMIEn extends React.Component {
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
          <h1 className='blog-title'>Sell more and Grow your Business with the Smart Marketing System</h1>
          <h3 className="blog-date">Published on January 20, 2020</h3>
          <hr></hr>
          <div className='blog-content'>
            <p>If you are an entrepreneur, business owner, or director, worried about getting more sales and being profitable, then ths message is for you...</p>
            <p>Marketing costs have been increasing and it is becoming more dificult to get results. The majority just reduce marketing costs, but this a MISTAKE. Now is when there are more opportunities... More people are connected online, using social media, consuming content, and buying things. So there is an opportunity.</p>
            <p>If you do it correctly, you could have good results during difficult times and position yourself as the leader of the market. This is possible thanks to a marketing system that will allow you to sell more and grow your business on autopilot. I call it “Smart Marketing System”.</p>
            <p>We have executed this system with several clients and we have achieved great results, inclusive during this difficult time. That is why I want to share it with you.</p>
            <p>The objective of this system is to turn people into friends, friends into clients, and clients into promoters. That is possible this way:</p>
            <p><strong>Lead Magnet >> Tripwire >> Core Offer >> Profit Maximizer >> Remarketing</strong></p>
            <p>Let’s talk about each component...</p>
            <h3>Lead Magnet</h3>
            <p>The lead magnet is the first touchpoint with your prospect, so it is very important to design one that makes sense to our business and the entire funnel.</p>
            <p>Now, why we use a lead magnet? and what is a lead magnet?</p>
            <p>Marketing works like human relations. We can’t ask to get married on the first date, we need to start by building a relationship (date several times, give some flowers, etc).</p>
            <p>The lead magnet represents your first conversation. It allows you to collect your prospect email in exchange for something of value you offer for free. Normally it is in video or PDF format, but it needs to be helpful or desired.</p>
            <p>For e-commerce, a lead magnet tends to be a discount coupon or any kind of incentive that allows you to collect emails and incentivize the prospect to make a purchase.</p>
            <p>Then it is time to send the prospect to the second step, a Tripwire.</p>
            <h3>Tripwire</h3>
            <p>After you have an email you need to work more on building the relationship, you need more commitment from your prospect. This commitment is normally given as a small amount of money or time dedicated to us.</p>
            <p>In businesses that sell physical products, the best Tripwire is selling a product at a very low price. For example, a comedy that sells guitars (the main product) could offer a nail kit at a very ridiculous low price. With this income, we don’t pretend to build our business but is it is an important step in building the relationship, plus they have shown action by buying, that is big progress.</p>
            <p>In the case of an info business, it is common to use a webinar, mini-class, free audit, etc. In this case, the potential client does not spend money but time on us, which is also huge.</p>
            <h3>Core Offer</h3>
            <p>There is not much to say here, this is when you show your main product to the prospect that has been warmed up. It is important to not skip any previous step, if you have designed your system correctly, you will start getting conversions at this point.</p>
            <h3>Profit Maximizer</h3>
            <p>You shouldn’t stop here, you shouldn’t rely on just one sale. Actually, a lot of businesses start being profitable in the second sale.</p>
            <p>At this point, you can offer “Order bumps”. When the client is adding the product to the cart you an offer an extra to boost income. For example, if you sold a book at $30, with a simple checkbox the client could also add the audio version for $20 extra.</p>
            <p>You could also use “Bundles” that allow us to upgrade them. For example, if you sold a course with a basic module of marketing at $400, you could offer basic and advanced together at $1200.</p>
            <p>The third option is “Cross-sell”. Probably you have seen this when you buy something on Amazon. For example, if you buy a laptop Amazon suggests complementary products like a case.</p>
            <p>The last one is “Up-sell”. If you sold a pair of socks at $5 each, you could offer a pack of 10 socks at $40.</p>
            <h3>Remarketing</h3>
            <p>What would you think if I told you that we have generated $1 million in sales to a client by just investing $30k within 2 months, using Facebook remarketing ads?</p>
            <p>These are extraordinary numbers and they are real. But it is incredible how many companies are not using remarketing and missing this opportunity.</p>
            <p>It turns out that the majority of your traffic won’t convert in the first visit, it is normal. So, in most cases, they just need an xtra incentive or more information to make the final decision.</p>
            <p>That is why but is important to have your pixel installed the first day and know how to create custom audiences.</p>
            <p>Every element is the system is very important and each of them will play an important role to achieve your business goals. If done correctly, you will be able to have a predictable and scalable revenue stream.</p>
            <div style={{textAlign: 'center'}}>
              <button onClick={this.sendCalendly} type="button" style={{fontWeight: 'bold', fontSize: '16px', padding: '12px' }} className="btn btn-success">Book a Free Evaluation Call</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticuloSMIEn