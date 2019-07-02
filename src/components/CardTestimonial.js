import React from 'react';

class CardTestimonial extends React.Component  {
  render() {
    return (
        <div className="card" style={{ marginBottom: '30px', textAlign: 'center', padding: '5px'}}>
            <div className="card-body">
                <h5 className="card-title" style={{color: '#295b8d'}}>{this.props.content}</h5>
                <p className="card-text" style={{color: '#3a8dde', fontStyle: 'italic', marginTop: '10px'}}>{this.props.author}</p>
            </div>
        </div>
    )
  } 
}


export default CardTestimonial;