import "./ToDoCreator.scss";
import { useState, useRef } from "react";
import { InputView } from "../Components/InputView.js";
import { Button } from "../Components/Button.js";
import { Tasks } from "./Tasks.js";

export const ToDoCreator = () => {
  const [todoItems, settodoItem] = useState([]);

  // const [newtodoItem, setnewtodoItem] = useState("");

  const inputRef = useRef("");

  //Adding a Task
  const add = () => {
    settodoItem([
      ...todoItems,
      { id: todoItems.length, item: inputRef.current.value, isActive: true },
    ]);

    // setnewtodoItem("");
    inputRef.current.value = "";
  };

  //Clear All Tasks
  const clearAll = () => {
    settodoItem([]);
  };


  //Clear Task
  const clear = (id1) => {
    const newList = todoItems.filter((taskitem) => taskitem.id !== id1);
    settodoItem(newList);
  };

  //Move Task Up
  const up = (u) => {
    const ind = todoItems.findIndex((taskitem) => taskitem.id === u);
    if (ind !== 0) {
      let tempObj = todoItems[ind - 1];
      todoItems[ind - 1] = todoItems[ind];
      todoItems[ind] = tempObj;
    }
    settodoItem([...todoItems]);
  };

  //Move Task Down
  const down = (d) => {
    const ind = todoItems.findIndex((taskitem) => taskitem.id === d);

    if (ind !== todoItems.length - 1) {
      let tempObj = todoItems[ind + 1];
      todoItems[ind + 1] = todoItems[ind];
      todoItems[ind] = tempObj;
    }

    

    settodoItem([...todoItems]);
  };

  //Changing Task status through Check box
  const onChangeCheckBox = (a) => {
    const ind = todoItems.findIndex((taskitem) => taskitem.id === a);
    todoItems[ind].isActive = todoItems[ind].isActive ? false : true;
    settodoItem([...todoItems]);
  };

  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView
          // value={newtodoItem}
          placeholder={"Enter Text here"}
          // onChange={onChangeEvent}
          refer={inputRef}
        />

        <Button name={"Add"} onClick={add} />

        <Button name={"Clear All"} onClick={clearAll} />
      </div>

      {todoItems.length === 0 && <div className = "noTask">No Tasks</div>}

      <Tasks
        todos={todoItems}
        up={up}
        down={down}
        clear={clear}
        onChangeCheckBox={onChangeCheckBox}
      />
  
    </>
  );
};
