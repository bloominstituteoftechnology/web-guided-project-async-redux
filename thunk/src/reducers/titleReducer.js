// Define initial state
const initialState = {};

export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";


// Define a reducer with all state management functions related to the title

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return { ...state, title: action.payload,  }
        case TOGGLE_EDITING: 
            return { ...state }
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state;  
    }
}