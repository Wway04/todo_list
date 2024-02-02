// filter actions
export const search = (data) => {
  return {
    type: "filter/search",
    payload: data,
  };
};

export const status = (data) => {
  return {
    type: "filter/status",
    payload: data,
  };
};

export const priority = (data) => {
  return {
    type: "filter/priority",
    payload: data,
  };
};

// search actions
export const add = (data) => {
  return {
    type: "todolist/add",
    payload: data,
  };
};

export const remove = (data) => {
  return {
    type: "todolist/remove",
    payload: data,
  };
};
