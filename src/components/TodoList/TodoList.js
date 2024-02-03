import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as id } from "uuid";

import "./TodoList.scss";
import List from "./List";
import PrioritySelect from "../PrioritySelect";
import { todoList } from "../../redux/actions";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("High");

  const dispatch = useDispatch();

  const handleTodo = (todo) => {
    setTodo(todo);
  };

  const handlePriority = (priority) => {
    setPriority(priority);
  };

  const handleAddTodo = () => {
    const item = { id: id(), name: todo, priority };
    dispatch(todoList.add(item));
  };

  return (
    <div className="todolist-wrapper">
      <List />
      <div className="todolist-acions">
        <input
          type="text"
          value={todo}
          onChange={(e) => handleTodo(e.target.value)}
        />
        <PrioritySelect priority={priority} setPriority={handlePriority} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;
