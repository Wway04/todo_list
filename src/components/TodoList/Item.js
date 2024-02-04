import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoList } from "../../redux/actions";

function Item({ todo }) {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    dispatch(todoList.complete({ id: todo.id, complete: !isCompleted }));
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <div className={`item-info ${todo.complete ? "active" : "inactive"}`}>
        <input
          id={todo.id}
          type="checkbox"
          checked={isCompleted}
          onChange={handleComplete}
        />
        <label htmlFor={todo.id}>{todo.name}</label>
      </div>
      <div className={`item-priority ${todo.complete ? "active" : "inactive"}`}>
        <span className={todo.priority}>{todo.priority}</span>
      </div>
    </>
  );
}

export default Item;
