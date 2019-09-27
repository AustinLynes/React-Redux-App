import {
    DATA_FETCHING_START,
    DATA_FETCHING_SUCCESS,
    DATA_FETCHING_FAIL
} from '../actions'

const initalState = {
    data: [],
    isFetching: false,
    errors: ''
}

export default function dataReducer(state=initalState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case DATA_FETCHING_START:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case DATA_FETCHING_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                errors: ''
            }
        case DATA_FETCHING_FAIL:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;

    }
} 