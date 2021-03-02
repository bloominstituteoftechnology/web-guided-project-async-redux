import axios from "axios";

export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const updateTitle = (newTitle) => {
    return {type: UPDATE_TITLE, payload: newTitle}
}

export const toggleEditing = () => {
    return {type: TOGGLE_EDITING}
}

const headers = {
    Accept: "application/json"
}

export const getJoke = () => (dispatch) => {
    // update state to loading
    dispatch({ type: FETCHING_QUOTE_START });

    // begin an API request
    axios.get("https://icanhazdadjoke.com/", {headers})     // respond to happy path & sad path, updating state with API response
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}