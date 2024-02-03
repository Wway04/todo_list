const initialState = JSON.parse(localStorage.getItem("initialState"));

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todolist/add":
      localStorage.setItem(
        "initialState",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "todolist/remove":
      // logic for removing
      return [...state];
    default:
      return state;
  }
};

export default todoListReducer;
