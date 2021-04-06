import { 
    FETCHING_QUOTE_FAILURE, 
    FETCHING_QUOTE_SUCCESS, 
    START_FETCHING_QUOTE 
    } from "../actions";

const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_QUOTE:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false
      }
    case FETCHING_QUOTE_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};