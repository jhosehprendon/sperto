import React from 'react';

class Card extends React.Component  {
  render() {
    return (
        <div class="card" style={{width: '18rem', margin: 'auto', marginBottom: '10px'}}>
            <div class="card-body">
                {this.props.children}
            </div>
        </div>
    )
  } 
}


export default Card;