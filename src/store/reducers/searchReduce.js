const initialState = [];

const searchReduce = (state = initialState, action) => {
  if (action.type === "SET_SEARCH") {
    return action.payload;
  }

  return state;
};

export default searchReduce;
