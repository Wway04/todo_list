import "./MainLayout.scss";
import Filters from "../../components/Filters";
import TodoList from "../../components/TodoList";
function MainLayout() {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="title">
          <h1>TODO APP with REDUX</h1>
        </div>
        <br />
        <br />
        <Filters />
        <br />
        <hr />
        <br />
        <TodoList />
      </div>
    </div>
  );
}

export default MainLayout;
