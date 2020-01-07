const practicesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.item];
    case "CLEAR_LIST":
      return [];
    default:
      return state;
  }
};

export default practicesReducer;
