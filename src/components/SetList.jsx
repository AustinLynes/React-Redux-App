import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import getData from '../actions'
const SetList = props => {
    useEffect(() => {
        props.getData('formats')
    }, [])
    return (
        <div className='set-list'>
            {/* {props.state.sets.map(set=>{return <h1>{set.name}</h1>})} */}
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
})(SetList);