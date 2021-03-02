import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

// Define initial state
const initialState = {
    editing: false,
    title: "WEBPT24 Redux Dad Joke Fiesta '09"
};


// Define a reducer with all state management functions related to the title

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return { ...state, title: action.payload, editing: false }
        case TOGGLE_EDITING: 
            return { ...state, editing: !state.editing }
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state;  
    }
}