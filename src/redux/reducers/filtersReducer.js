const initialState = {
  search: "",
  status: "All",
  priority: "All",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filter/search":
      return {
        ...state,
        search: action.payload,
      };
    case "filter/status":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/priority":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
