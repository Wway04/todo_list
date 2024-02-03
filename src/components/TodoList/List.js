import { useSelector } from "react-redux";
import { todoListRemainingSelector } from "../../redux/selector";

import "./TodoList.scss";
import Item from "./Item";

function List() {
  const todoList = useSelector(todoListRemainingSelector);
  return (
    <div className="list">
      {todoList.map((item) => {
        return (
          <div key={item.id} className="list-item">
            <Item todo={item} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
