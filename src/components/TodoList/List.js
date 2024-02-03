import { useSelector } from "react-redux";
import { todoListSelector } from "../../redux/selector";

import "./TodoList.scss";
import Item from "./Item";

function List() {
  const todoList = useSelector(todoListSelector);
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
