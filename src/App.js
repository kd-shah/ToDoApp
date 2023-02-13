import "./App.scss";
import { useState } from "react";
import { InputView } from "./input.js";
import { Button } from "./Button.js";
import { ToDoItem } from "./ListItem.js";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function TODO() {
  const [ToDoItems, setToDoItem] = useState([
    { id: 0, item: "First Task", isActive: true },
  ]);

  const [newToDoItem, setNewToDoItem] = useState("");

  //Adding a Task
  const Add = () => {
    if (newToDoItem !== "") {
      setToDoItem([
        ...ToDoItems,
        { id: ToDoItems.length, item: newToDoItem, isActive: true },
      ]);

      setNewToDoItem("");
    } else alert("Invalid");
  };

  //Clear All Tasks
  const ClearAll = () => {
    setToDoItem([]);
  };

  //Assigning input value to ToDoItem
  const onChangeEvent = (e) => {
    setNewToDoItem(e.target.value);
  };

  //Clear Task
  const Clear = (id1) => {
    const newList = ToDoItems.filter((taskitem) => taskitem.id !== id1);
    setToDoItem(newList);
  };

  //Move Task Up
  const Up = (u) => {
    const ind = ToDoItems.findIndex((taskitem) => taskitem.id === u);
    if (ind !== 0) {
      let tempObj = ToDoItems[ind - 1];
      ToDoItems[ind - 1] = ToDoItems[ind];
      ToDoItems[ind] = tempObj;
    }
    setToDoItem([...ToDoItems]);
  };

  //Move Task Down
  const Down = (d) => {
    const ind = ToDoItems.findIndex((taskitem) => taskitem.id === d);

    if (ind !== ToDoItems.length - 1) {
      let tempObj = ToDoItems[ind + 1];
      ToDoItems[ind + 1] = ToDoItems[ind];
      ToDoItems[ind] = tempObj;
    }

    //Alternate methods

    //ToDoItems[ind] = ToDoItems.splice(ind+1, 1, ToDoItems[ind])[0];

    // let tempObj = ToDoItems.splice(ind, 1, ToDoItems[ind+1])[0];
    // ToDoItems.splice(ind+1, 1, tempObj);

    setToDoItem([...ToDoItems]);
  };

  //Changing Task Status
  const Status = (a) => {
    const ind = ToDoItems.findIndex((taskitem) => taskitem.id === a);

    if (ToDoItems[ind].isActive === true) {
      ToDoItems[ind].isActive = false;
    } else {
      ToDoItems[ind].isActive = true;
    }

    setToDoItem([...ToDoItems]);
  };

  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView
          className="input"
          value={newToDoItem}
          placeholder={"Enter Text here"}
          onChange={onChangeEvent}
        />

        <Button name={"Add"} onClick={Add} />

        <Button name={"Clear All"} onClick={ClearAll} />
      </div>

      {ToDoItems.map((tasks) => {
        return (
          <div
            className={tasks.isActive ? "list" : "inActiveTask"} //Class Selection
            name="list"
            key={tasks.id}
          >
            <ToDoItem value={tasks.item} />

            <AiFillDelete className="buttons" onClick={() => Clear(tasks.id)} />

            <AiOutlineInfoCircle
              className="buttons"
              onClick={() => Status(tasks.id)}
            />

            <FaChevronDown className="buttons" onClick={() => Down(tasks.id)} />

            <FaChevronUp className="buttons" onClick={() => Up(tasks.id)} />
          </div>
        );
      })}
    </>
  );
}
