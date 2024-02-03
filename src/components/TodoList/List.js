import { useSelector } from "react-redux";
import { todoListSelector } from "../../redux/selector";

import "./TodoList.scss";

function List() {
  const todoList = useSelector(todoListSelector);
  console.log("🚀 ~ List ~ todoList:", todoList);
  return (
    <div className="list">
      {todoList.map((item) => {
        return (
          <div key={item.id} className="list-item">
            <div className="item-action">
              <input type="checkbox" />
              <span>{item.name}</span>
            </div>
            <div className="item-priority">
              <span>{item.priority}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
