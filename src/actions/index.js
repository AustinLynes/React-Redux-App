import axios from 'axios';

export const DATA_FETCHING_START = 'DATA_FETCHING_START';
export const DATA_FETCHING_SUCCESS = 'DATA_FETCHING_SUCCESS';
export const DATA_FETCHING_FAIL = 'DATA_FETCHING_FAIL';

const getData = (route) => dispatch => {
    dispatch({ type: DATA_FETCHING_START });
    axios
        .get(`https://api.magicthegathering.io/v1/${route}`)
        .then(res =>
            dispatch({
                type: DATA_FETCHING_SUCCESS,
                payload: res.data[route]
            })
        )
        .catch(err =>
            dispatch({
                type: DATA_FETCHING_FAIL,
                payload: err
            })
        )

}
export default getData;