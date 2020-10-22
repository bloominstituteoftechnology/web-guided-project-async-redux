import { UPDATE_TITLE } from '../actions';

const initialState = {
  title: 'Dragon Club Members'
};

export function titleReducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case UPDATE_TITLE:
      console.log('update_title', action);
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
