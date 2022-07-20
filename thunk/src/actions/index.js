import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_FAIL = "FETCH_FAIL"
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const fetchStart = () => {
    return({ type: FETCH_START});
}

export const fetchSuccess = (person) => {
    return({ type: FETCH_SUCCESS, payload: person })
}

export const fetchFail = (errorMessage) => {
    return( {type: FETCH_FAIL, payload: errorMessage})
}

export const getPerson = () => {
//thunk allows us to create an enhanced action creator that can:
// 1. return a function that has access to dispatch method
// 2. this allows to intercept before actions are being dispatched and run ASYNC operations + multiple actions
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get("https://randomuser.me/api/")
            .then(res => {
                console.log("response inside axios:", res)
                dispatch(fetchSuccess(res.data.results[0]))
            })
    }
}