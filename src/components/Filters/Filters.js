import { v4 as id } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filters } from "../../redux/actions";
import { todoListSelector } from "../../redux/selector";
import "./Filters.scss";
import PrioritySelect from "../PrioritySelect";
const STATUS = [
  { id: id(), value: "All" },
  { id: id(), value: "Completed" },
  { id: id(), value: "Todo" },
];

function Filters() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [togglePopperSearch, setTogglePopperSearch] = useState(false);

  const todoListSearch = useSelector(todoListSelector);

  const handleSearch = (search) => {
    setSearch(search);
    dispatch(filters.search(search));
  };

  const handleStatus = (status) => {
    setStatus(status);
    dispatch(filters.status(status));
  };

  const handlePriority = (priority) => {
    setPriority(priority);
    dispatch(filters.priority(priority));
  };
  return (
    <div className="filters-wrapper">
      <div className="filters-search">
        <h4 className="heading-title">Search</h4>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onFocus={() => setTogglePopperSearch(true)}
            onBlur={() => setTogglePopperSearch(false)}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </button>
        </div>
        {togglePopperSearch && (
          <div className="search-todolist">
            {todoListSearch.map((item) => {
              if (item.name?.includes(search)) {
                return (
                  <div
                    className="search-item"
                    onMouseDown={() => handleSearch(item.name)}
                  >
                    <span>{item.name}</span>
                  </div>
                );
              }
              return <></>;
            })}
          </div>
        )}
      </div>
      <div className="filters-status">
        <h4 className="heading-title">Filter by status</h4>
        <div className="status">
          {STATUS.map((item) => {
            return (
              <div className="status-item">
                <input
                  key={item.id}
                  id={item.id}
                  type="radio"
                  name="status"
                  value={item.value}
                  checked={item.value === status}
                  onChange={(e) => handleStatus(e.target.value)}
                />
                <label htmlFor={item.id}>
                  <span>{item.value}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filters-priority">
        <h4 className="heading-title">Filter by priority</h4>
        <div className="priority">
          <PrioritySelect
            priority={priority}
            setPriority={handlePriority}
            all
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
