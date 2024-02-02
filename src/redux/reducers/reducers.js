import filterReducer from "./filterReducer";
import todoListReducer from "./todoListReducer";

const rootReducer = (state = {}, action) => {
  return {
    filter: filterReducer(state.filter, action),
    todoList: todoListReducer(state.todoList, action),
  };
};
export default rootReducer;
