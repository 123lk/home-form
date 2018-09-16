export const initialState = {
  name: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
   case 'SAVE_NAME':
    return Object.assign({}, state, {
      name: action.name
    });
   default:
    return state;
  }
 };