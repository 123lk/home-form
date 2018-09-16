export const saveName = (name) => dispatch => {
  dispatch({
    type: 'SAVE_NAME',
    name: name
  });
};