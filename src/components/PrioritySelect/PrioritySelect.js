import { v4 as id } from "uuid";

const PRIORITY = [
  { id: id(), value: "High" },
  { id: id(), value: "Medium" },
  { id: id(), value: "Low" },
];
function PrioritySelect({ priority, setPriority, all }) {
  return (
    <select
      id=""
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
    >
      {all && <option value="All">All</option>}
      {PRIORITY.map((item) => (
        <option key={item.id} id={item.id} value={item.value}>
          {item.value}
        </option>
      ))}
    </select>
  );
}

export default PrioritySelect;
