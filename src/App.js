import { ToDoCreator } from "./Containers/ToDoCreator.js";
// import { ToDoForm } from "./Containers/ToDoForm.js";


export default function TODO() {
  return (
    <>
      {/* Comment ToDoCreator to use the Form */}
      {/* <ToDoForm/>   */}
      <ToDoCreator/>     
    </>
  );
}


// Moving Task
//Alternate methods

    //todoItems[ind] = todoItems.splice(ind+1, 1, todoItems[ind])[0];

    // let tempObj = todoItems.splice(ind, 1, todoItems[ind+1])[0];
    // todoItems.splice(ind+1, 1, tempObj);

//Changing Task Status

  // const Status = (a) => {
  //   const ind = todoItems.findIndex((taskitem) => taskitem.id === a);

  //   if (todoItems[ind].isActive === true) {
  //     todoItems[ind].isActive = false;
  //   } else {
  //     todoItems[ind].isActive = true;
  //   }

  //   todoItems[ind].isActive = todoItems[ind].isActive ? false : true;
  //   settodoItem([...todoItems]);
  // };
