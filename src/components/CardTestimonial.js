import React from 'react';

class CardTestimonial extends React.Component  {
  render() {
    return (
        <div class="card" style={{ marginBottom: '30px', textAlign: 'center', padding: '5px'}}>
            <div class="card-body">
                <h5 class="card-title" style={{color: '#295b8d'}}>{this.props.content}</h5>
                <p class="card-text" style={{color: '#3a8dde', fontStyle: 'italic', marginTop: '10px'}}>{this.props.author}</p>
            </div>
        </div>
    )
  } 
}


export default CardTestimonial;