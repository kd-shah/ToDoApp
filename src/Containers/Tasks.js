import "./Tasks.scss";
import { ToDoItem } from "../Components/ToDoItem.js";
import { Button } from "../Components/Button.js";
import { IconButton } from "../Components/IconButton";
import { InputView } from "../Components/InputView";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const Tasks = ({
  todos,
  down,
  clear,
  up,
  edit,
  onChangeCheckBox,
  cancelEdit,
  saveTask,
  editTaskRef,
}) => {
  const tasklist = todos?.map((task, index) => {
    return (
      <div
        className={task.isActive ? "list" : "inActiveTask"} //Class Selection
        key={task.id}
      >
        {task.isEditing ? (
          <>
            <InputView refer={editTaskRef} value={task.item} />
            {/* value is default value */}
            <Button name={"Save"} onClick={() => saveTask(task.id)} />
            <Button name={"Cancel"} onClick={() => cancelEdit(task.id)} />
          </>
        ) : (
          <ToDoItem
            value={task.item}
            onChange={() => onChangeCheckBox(task.id)}
            checked={task.isActive ? false : true} // checked task is inactive task
          />
        )}

        <IconButton
          className="buttons"
          onClick={() => clear(task.id)}
          title={"Delete Task"}
          //icon={<FontAwesomeIcon icon={faTrash} className="icons" />}
          icon = {<AiFillDelete className="icons"/>}
        />

        <IconButton
          disabled={index === todos.length - 1 ? true : false}
          className="buttons"
          onClick={() => down(task.id)}
          title={"Move Task Down"}
          //icon={<FontAwesomeIcon icon={faChevronDown} className="icons" />}
          icon = {<FaChevronDown className="icons"/>}
        />
       

        <IconButton
          disabled={index === 0 ? true : false}
          className="buttons"
          onClick={() => up(task.id)}
          title={"Move Task Up"}
          //icon={<FontAwesomeIcon icon={faChevronUp} className="icons" />}
          icon = {<FaChevronUp className="icons"/>}
        />
        

        <IconButton
          className="buttons"
          disabled={task.isEditing ? true : false}
          onClick={() => edit(task.id)}
          title={"Edit Task"}
          //icon={<FontAwesomeIcon icon={faPen} className="icons" />}
          icon = {<MdModeEditOutline className="icons"/>}
        />
      </div>
    );
  });
  return <>{tasklist}</>;
};
