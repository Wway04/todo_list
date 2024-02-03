// filter actions
const search = (data) => {
  return {
    type: "filter/search",
    payload: data,
  };
};

const status = (data) => {
  return {
    type: "filter/status",
    payload: data,
  };
};

const priority = (data) => {
  return {
    type: "filter/priority",
    payload: data,
  };
};

export const filters = {
  search,
  status,
  priority,
};

// search actions
const add = (data) => {
  return {
    type: "todolist/add",
    payload: data,
  };
};

const remove = (data) => {
  return {
    type: "todolist/remove",
    payload: data,
  };
};

export const todoList = {
  add,
  remove,
};
