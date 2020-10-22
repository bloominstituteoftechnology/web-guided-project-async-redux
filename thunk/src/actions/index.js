import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    .get('https://api.kanye.rest')
    .then(res => {
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};

// export const getQuote = () => {
//   return dispatch => {
//     dispatch({ type: FETCHING_QUOTE_START });
//   };
// };
