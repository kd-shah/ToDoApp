import "./Tasks.scss";
import { ToDoItem } from "../Components/ToDoItem.js";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export const Tasks = ({ todos, down, clear, up, onChangeCheckBox }) => {
  const tasklist = todos?.map((tasks, index) => {
    return (
      <div
        className={tasks.isActive ? "list" : "inActiveTask"} //Class Selection
        key={tasks.id}
      >
        <ToDoItem
          value={tasks.item}
          onChange={() => onChangeCheckBox(tasks.id)}
        />

        <button className="buttons">
          <AiFillDelete className="icons" onClick={() => clear(tasks.id)} />
        </button>
 
        {index === todos.length - 1 && (
          <button disabled className="buttons">
            <FaChevronDown className="icons" onClick={() => down(tasks.id)} />
          </button>
        )}
        {index !== todos.length - 1 && (
          <button className="buttons">
            <FaChevronDown className="icons" onClick={() => down(tasks.id)} />
          </button>
        )}
        {index === 0 && (
          <button disabled className="buttons">
            <FaChevronUp className="icons" onClick={() => up(tasks.id)} />
          </button>
        )}
        {index !== 0 && (
          <button className="buttons">
            <FaChevronUp className="icons" onClick={() => up(tasks.id)} />
          </button>
        )}
      </div>
    );
  });
  return <>{tasklist}</>;
};




