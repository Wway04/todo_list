import { v4 as id } from "uuid";
import "./Filters.scss";

const STATUS = [{ id: id() }];

function Filters() {
  return (
    <div className="filter-wrapper">
      <div className="filters-search">
        <h4 className="heading-title">Search</h4>
        <input type="text" placeholder="Search..." />
        <button></button>
      </div>
      <div className="filters-status">
        <h4 className="heading-title">Filter by status</h4>
      </div>
    </div>
  );
}

export default Filters;
