export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";

export const updateTitle = (newTitle) => {
    return {type: UPDATE_TITLE, payload: newTitle}
}

export const toggleEditing = () => {
    return {type: TOGGLE_EDITING}
}