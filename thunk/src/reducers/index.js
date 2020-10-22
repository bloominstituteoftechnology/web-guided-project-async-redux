import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS } from '../actions';

const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_QUOTE_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCHING_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};