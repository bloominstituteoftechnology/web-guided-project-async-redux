import axios from 'axios';

export const START_FETCHING_QUOTE = 'START_FETCHING_QUOTE';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const getQuote = () => (dispatch) =>{
    dispatch({type: START_FETCHING_QUOTE });
    axios.get('https://api.kanye.rest/')
        .then(res=>{
            console.log(res)
            dispatch({
                type: FETCHING_QUOTE_SUCCESS,
                payload: {
                    quote: res.data.quote
                }
            })
        })
        .catch(err=>{
            console.error('unable to get the quote: ', err.message)
            dispatch({type:FETCHING_QUOTE_FAILURE, payload: err.message})
        })
}