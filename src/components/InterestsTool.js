import React from 'react';
import '../css/Sequence.css';
import Card from './Card';
import { connect } from 'react-redux';
import { fetchInterests } from '../store/actions';

class InterestsTool extends React.Component {

  state = {
    searchTerm: '',
    trySearch: false,
  }

  searchInterest() {
    this.setState({ trySearch: true })
    this.props.fetchInterests(this.state.searchTerm).then(() => {
      this.setState({
        searchTerm: '',
        trySearch: false
      })
    })
  }

  renderList = () => {
    if(!this.props.interests.length) {
      if(this.props.interests.length === 0) {
        return 'No interests were found for this keyword. Please try again!'
      } else {
        return ''
      }
    }
    
    return (
      <div>
        <table style={{width: '80%'}} class="ui celled table table-display">
          <thead>
            <tr>
              <th>Interest name</th>
              <th>Facebook Profile</th>
              <th>Audience Size</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody >
            {this.props.interests.map(interest => {
              return ( 
                <tr key={interest.id}>
                  <td data-label="Interest name">{interest.name}</td>
                  <td data-label="Facebook Profile"><a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/search/pages/?q=${interest.name}`}>Facebook</a></td>
                  <td data-label="Audience Size">{interest.audience_size}</td>
                  <td data-label="Topic">{interest.topic}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div class="table-display2">
          {this.props.interests.map(interest => {
            return (
              <Card>
                <p><span style={{fontWeight: 'bold'}}>Interest Name:</span> {interest.name}</p>
                <p><a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/search/pages/?q=${interest.name}`}>Facebook</a></p>
                <p><span style={{fontWeight: 'bold'}}>Audience Size:</span> {interest.audience_size}</p>
                <p><span style={{fontWeight: 'bold'}}>Interest Topic:</span> {interest.topic}</p>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  onChageInput(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.searchInterest()
    }
  }

  renderSpinner = () => {
    if(this.state.trySearch) {
        return (
            <div style ={{marginTop: '20px'}} class="ui active centered inline loader"></div>
        )
    } else {
        return null
    }
  }

  render() {
    return ( 
      <div style={{margin: '30px 0 0 11%'}}>
        {/* <h2 style={{margin: '20px 0 50px 0', fontWeight: 'bold'}}>99% of Marketers are Bidding for the Same Interests <br/>Now you are part of the 1% with a competitive advantage</h2> */}
        <h3>Start Finding Hidden Interests</h3>
        <div className="inputTool">
          <input 
            onChange={(e) => this.onChageInput(e)} 
            value={this.state.searchTerm} 
            className="inputModal" 
            placeholder="Type interest"
            onKeyPress={(e) => this._handleKeyDown(e)}
            >
          </input>
        </div>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <button style={{height: '40px'}} onClick={() => this.searchInterest()} className="btn btn-success">Search Interests</button>
          <div style={{margin: '-15px 0 0 5px'}}>{this.renderSpinner()}</div>
        </div>
        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
      interests: state.tools.interests
  } 
}

export default connect(mapStateToProps, { fetchInterests })(InterestsTool)