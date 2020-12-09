import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS } from '../actions';

const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};