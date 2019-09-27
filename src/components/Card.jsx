import React from 'react';

const Card = props => {
    return (
        <div className={`card`}>
          <img src={props.card.imageUrl} alt={props.card.name}/>
        </div>
    )
}

export default Card;
