import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getData from '../actions';
import Card from './Card';

const CardList = props => {
    useEffect(() => {
        props.getData('cards');
    }, [])
    if (props.isFetching){
        return <h1>Loading..</h1>
    }
    return (
        <div className='card-list'>
            {props.data.map(card => {
                 if(card.imageUrl !== undefined)
                    return <Card key={card.multiverseid} card={card}/>
                  })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {
    getData
})(CardList);
