import React from 'react';

class Card extends React.Component  {
  render() {
    return (
        <div className="card" style={{width: '20rem', marginBottom: '10px', margin: 'auto'}}>
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
    )
  } 
}


export default Card;