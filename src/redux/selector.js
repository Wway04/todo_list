import { createSelector } from "reselect";

// filter selectors
export const filtersSelector = (state) => state.filters;
export const searchSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;

// todoList selectors
export const todoListSelector = (state) => state.todoList;

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchSelector,
  statusSelector,
  prioritySelector,
  (todoList, search, status, priority) => {
    return todoList.filter((item) => {
      console.log(priority, item.priority);

      let isItem = true;
      if (!item.name.includes(search)) isItem = false;
      if (status === "Completed" && !item.complete) {
        isItem = false;
      } else if (status === "Todo" && item.complete) {
        isItem = false;
      }
      if (!(priority === "All") && !(priority === item.priority)) {
        isItem = false;
      }
      return isItem;
    });
  }
);
