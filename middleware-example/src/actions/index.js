export const UPDATE_TITLE = 'UPDATE_TITLE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const TOGGLE_FRIEND = 'TOGGLE_FRIEND';

export function updateTitle(newTitle) {
  console.log('action', newTitle);
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}

export function addNewFriend(newFriend) {
  console.log('action', newFriend);
  return {
    type: ADD_FRIEND,
    payload: newFriend
  };
}

export function toggleFriend(index) {
  console.log('action', index);
  return {
    type: TOGGLE_FRIEND,
    payload: index
  };
}
