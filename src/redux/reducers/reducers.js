import filtersReducer from "./filtersReducer";
import todoListReducer from "./todoListReducer";

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filter, action),
    todoList: todoListReducer(state.todoList, action),
  };
};
export default rootReducer;
