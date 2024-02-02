// filter selectors
export const filtersSelector = (state) => state.filters;
export const searchSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;

// todoList selectors
export const todoListSelector = (state) => state.todoList;
