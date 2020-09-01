import React from 'react';
import { connect } from 'react-redux';
import LeadFormEn from '../LeadFormEn';
import { createContact } from '../../store/actions';
import '../../css/Sequence.css'

class JoinList extends React.Component {

  state = {
    tryCreate: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = (formValues) => {
    this.setState({ tryCreate: true })

    this.props.createContact(formValues, 26, 27).then(() => {
      this.setState({tryCreate: false})
    }).catch(e => {
      this.setState({tryCreate: false})
    })
  }

  render() {
    return (
      <div className='rmk-first--flex over' style={{display: 'flex'}}>
        <div style={{marginRight: '10%'}}>
          <h2 className='rmk-first__title' style={{color: '#304057'}}>Want to Get Paid in Bitcoin or Crypto? [Part or Your Full Salary] Join for Free!</h2>
          <h3 className='rmk-first__subtitle' style={{color: '#304057'}}>We will contact your company and teach them how to do it</h3>
          <ul>
            <li style={{color: '#304057', fontSize: '20px'}}>Get paid straight to your wallet.</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Set how much you want from you salary. 10% 20% 50% 100%?</li>
            <li style={{color: '#304057', fontSize: '20px'}}>Receive stable coins if you want.</li>
          </ul>
          <LeadFormEn
            from='leadMagnet'
            onSubmit={this.onSubmit} 
            buttonText='Join the List'
            loading={this.state.tryCreate}
            message= {this.props.error}
          />
        </div>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    error: state.contact.error
  }
}

export default connect(mapStateToProps, {createContact})(JoinList)