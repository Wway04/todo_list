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
      console.log(search);
      let isItem = true;
      if (!item.name.includes(search)) return (isItem = false);
      if (status === "Completed" && !item.complete) {
        return (isItem = false);
      } else if (status === "Todo" && item.complete) {
        return (isItem = false);
      }
      if (!(priority === "All") && !(priority === item.priority)) {
        return (isItem = false);
      }
      return isItem;
    });
  }
);
