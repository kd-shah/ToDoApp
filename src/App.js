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

  //   useEffect(()=> {
  //    setToDoItem(ToDoItems)
  //   },[ToDoItems])
  const Add = () => {
    if (newToDoItem !== "") {
      setToDoItem([
        ...ToDoItems,
        { id: ToDoItems.length, item: newToDoItem, isActive: true },
      ]);

      setNewToDoItem("");
    } else alert("Invalid");
  };

  const ClearAll = () => {
    setToDoItem([]);
  };

  const onChangeEvent = (e) => {
    setNewToDoItem(e.target.value);
  };

  const Clear = (id1) => {
    const newList = ToDoItems.filter((taskitem) => taskitem.id !== id1);
    setToDoItem(newList);
  };

  const Up = (u) => {
    const ind = ToDoItems.findIndex((taskitem) => taskitem.id === u);
    let tempObj = ToDoItems[ind - 1];
    ToDoItems[ind - 1] = ToDoItems[ind];
    ToDoItems[ind] = tempObj;
    setToDoItem([...ToDoItems]);
  };

  const Status = (a) => {
    const ind = ToDoItems.findIndex((taskitem) => taskitem.id === a);

    if (ToDoItems[ind].isActive === true) {
      ToDoItems[ind].isActive = false;
    } else {
      ToDoItems[ind].isActive = true;
    }

    console.log(ToDoItems[ind]);
    setToDoItem([...ToDoItems]);
  };
  const Down = (d) => {
    const ind = ToDoItems.findIndex((taskitem) => taskitem.id === d);

    /*ToDoItems[ind] = ToDoItems.splice(ind+1, 1, ToDoItems[ind])[0];*/

    /*let tempObj = ToDoItems.splice(ind, 1, ToDoItems[ind+1])[0];
        ToDoItems.splice(ind+1, 1, tempObj);*/

    let tempObj = ToDoItems[ind + 1];
    ToDoItems[ind + 1] = ToDoItems[ind];
    ToDoItems[ind] = tempObj;

    console.log(ToDoItems[ind]);
    setToDoItem([...ToDoItems]);
  };

  return (
    <>
      <div className="background">
        <h1>TODO LIST</h1>
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
            className={tasks.isActive ? "list" : "inActiveTask"}
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
