import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";
const initialState = {
  person: {
    name: {
      title: "Mr",
      first: "Silas",
      last: "Petersen"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    }
  },
  isFetching: false,
  error: ''
};

//FETCH_START, FETCH_FAIL, FETCH_SUCCESS

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        person: {}, 
        isFetching: true,
        error: '' 
      }
    case FETCH_FAIL:
      return {
        ...state,
        person: {},
        isFetching: false,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        person: action.payload,
        isFetching: false,
        error: ''
      }
    default:
      return state;
  }
};