import { useState } from "react";

function Item({ todo }) {
  console.log("🚀 ~ Item ~ todo:", todo);
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <>
      <div className="item-info">
        <input type="checkbox" />
        <span>{todo.name}</span>
      </div>
      <div className="item-priority">
        <span className={todo.priority}>{todo.priority}</span>
      </div>
    </>
  );
}

export default Item;
