import "./ToDoCreator.scss";
import { useState, useRef } from "react";
import { InputView } from "../Components/InputView.js";
import { Button } from "../Components/Button.js";
import { Tasks } from "./Tasks.js";

export const ToDoCreator = () => {
  const [todoItems, settodoItem] = useState([]);

  const inputRef = useRef("");
  const editTaskRef = useRef("");

  //Adding a Task
  const add = () => {
    if (inputRef.current.value === "") {
      alert("Task Cannot be Empty");
    } else {
      settodoItem([
        ...todoItems,
        {
          id: todoItems.length,
          item: inputRef.current.value,
          isActive: true,
          isEditing: false,
        },
      ]);
    }
    inputRef.current.value = "";
  };

  //Clear All Tasks
  const clearAll = () => {
    settodoItem([]);
  };

  //Clear Task
  const clear = (taskid) => {
    const newList = todoItems.filter((taskitem) => taskitem.id !== taskid);
    settodoItem(newList);
  };

  //Move Task Up
  const up = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    if (index !== 0) {
      let tempObj = todoItems[index - 1];
      todoItems[index - 1] = todoItems[index];
      todoItems[index] = tempObj;
    }
    settodoItem([...todoItems]);
  };

  //Move Task Down
  const down = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    console.log(index);
    todoItems[index] = todoItems.splice(index + 1, 1, todoItems[index])[0];
    settodoItem([...todoItems]);
  };

  //Changing Task status through Check box
  const onChangeCheckBox = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);

    todoItems[index].isActive = todoItems[index].isActive ? false : true;
    console.log(todoItems[index].isActive);
    settodoItem([...todoItems]);
  };

  // Edit Task
  const edit = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    settodoItem([...todoItems]);
    todoItems[index].isEditing = true;
  };

  // Save Edited Task
  const saveTask = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    const tempTask = todoItems[index].item;
    if (editTaskRef.current.value !== "") {
      todoItems[index].item = editTaskRef.current.value;
    } else {alert("Invalid");
    todoItems[index].item = tempTask;}

    settodoItem([...todoItems]);
    todoItems[index].isEditing = false;
  };

  // Cancel Editing Task
  const cancelEdit = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    todoItems[index].isEditing = false;
    settodoItem([...todoItems]);
  };

  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView placeholder={"Enter Text here"} refer={inputRef} />

        <Button name={"Add"} onClick={add} />

        <Button name={"Clear All"} onClick={clearAll} />
      </div>

      {todoItems.length === 0 && <div className="noTask">No Tasks</div>}

      <Tasks
        todos={todoItems}
        up={up}
        down={down}
        clear={clear}
        onChangeCheckBox={onChangeCheckBox}
        edit={edit}
        saveTask={saveTask}
        cancelEdit={cancelEdit}
        editTaskRef={editTaskRef}
      />
    </>
  );
};

//Alternate methods for swapping

//todoItems[index] = todoItems.splice(index+1, 1, todoItems[index])[0];

// let tempObj = todoItems.splice(index, 1, todoItems[index+1])[0];
// todoItems.splice(index+1, 1, tempObj);

// Alternate method for changing task status

// if (todoItems[index].isActive === true) {
//     todoItems[index].isActive = false;
//      } else {
//        todoItems[index].isActive = true;
//      }
