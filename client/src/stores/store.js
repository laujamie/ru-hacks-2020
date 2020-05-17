export const initialState = { blob: null };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOB':
      return {
        ...state,
        blob: action.blob,
      };
    default:
      return state;
  }
};
