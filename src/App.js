import './App.css';
import { useState } from 'react';
import {InputView} from './input.js';
import {Button} from './Button.js';
import {ToDoItem} from './ListItem.js';

export default function TODO() {

    const [ToDoItems, setToDoItem] = useState([
        {id: 0, item: 'First Task' }
    ])

    const [newToDoItem, setNewToDoItem] = useState('')

    const onAdd = () => {
        setToDoItem([...ToDoItems, {id: ToDoItems.length +1 , item: newToDoItem }])
        setNewToDoItem('')
    }

    const onClearAll = () => {
        setToDoItem([])
    }

    const onChangeEvent = (e) => {
        setNewToDoItem(e.target.value)
    }

    const onClear = (id) => {
        const newList = ToDoItems.filter((task) =>task.id !== id);
        setToDoItem(newList);
    }

    


    return (

      <>
       <div className="Background">
        <h1>TODO List</h1>
        <InputView
                className = "input"
                value={newToDoItem}
                placeholder={"Enter Text here"}
                onChange={onChangeEvent}
        />
        <Button
                type={"Add"}
                onClick={onAdd}
        />
        <Button
                type={"Clear All"}
                onClick={onClearAll}
        />

        </div>
        

            {
                ToDoItems.map((tasks) => {
                    return (
                        <div className="list">

                            <div className = "displayList">
                                <ToDoItem value={tasks.item} />
                            </div>
                            
                            <div className = "clr">
                            <Button
                                type={"Clear"}
                                onClick={() => onClear(tasks.id)}
                            />

                            </div>

                        </div>
                            );

                })
                }
       
          
        </>
    )
}