import './App.scss';
import { useState, useEffect } from 'react';
import {InputView} from './input.js';
import {Button} from './Button.js';
import { ToDoItem } from './ListItem.js';
import styled, { css } from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { AiFillDelete} from "react-icons/ai";


export default function TODO() {

    const [ToDoItems, setToDoItem] = useState([
        {id: 0, item: 'First Task' }
    ])

    const [newToDoItem, setNewToDoItem] = useState('')

  /*  const [style, setStyle] = useState("list");*/

   

    const Add = () => {
        if (newToDoItem !== "") {
            setToDoItem([...ToDoItems, { id: ToDoItems.length , item: newToDoItem }])
            console.log(ToDoItems);
            setNewToDoItem('')
        }
        else alert("Invalid")   
    }

    

    const ClearAll = () => {
        setToDoItem([])
    }

    const onChangeEvent = (e) => {
        
        setNewToDoItem(e.target.value)
    }

    const Clear = (id1) => {
        const newList = ToDoItems.filter(taskitem => taskitem.id !== id1);
        
        setToDoItem(newList);
    }


    const Up = (u) => {
        const ind = ToDoItems.findIndex(taskitem => taskitem.id === u);
       /* console.log(ind);*/

        /*ToDoItems[ind] = ToDoItems.splice(ind-1, 1, ToDoItems[ind])[0];*/

        /*let tempObj = ToDoItems.splice(ind, 1, ToDoItems[ind-1])[0];
        ToDoItems.splice(ind-1, 1, tempObj);*/

        let tempObj = ToDoItems[ind - 1];
        ToDoItems[ind - 1] = ToDoItems[ind];
        ToDoItems[ind] = tempObj;

        console.log(ToDoItems[ind]);


        setToDoItem(ToDoItems);
    }


    const Down = (d) => {
        const ind = ToDoItems.findIndex(taskitem => taskitem.id === d);
        /* console.log(ind);*/

        /*ToDoItems[ind] = ToDoItems.splice(ind+1, 1, ToDoItems[ind])[0];*/

        /*let tempObj = ToDoItems.splice(ind, 1, ToDoItems[ind+1])[0];
        ToDoItems.splice(ind+1, 1, tempObj);*/

       
            let tempObj = ToDoItems[ind + 1];
            ToDoItems[ind + 1] = ToDoItems[ind];
            ToDoItems[ind] = tempObj;

            console.log(ToDoItems[ind]);
            setNewToDoItem(ToDoItems);        
    }

   

  

     return (

      <>
       <div className="Background">
        <h1>TODO LIST</h1>
        <InputView
                className = "input"
                value={newToDoItem}
                placeholder={"Enter Text here"}
                onChange={onChangeEvent}
        />
        <Button 
                name={"Add"}
                onClick={Add}            
        />
        <Button 
                name={"Clear All"}
                onClick={ClearAll}
        />
        </div>
        

            {
                ToDoItems.map((tasks) => {
                    return (
                        <div className="list">

                           
                            <ToDoItem
                                value={tasks.item}
                                                           
                            />
                            

                           <AiFillDelete className="buttons"
                                onClick={() => Clear(tasks.id)}
                           />                   

                           <FaChevronDown className="buttons"
                                onClick={() => Down(tasks.id)}
                           />

                           <FaChevronUp className="buttons"
                                onClick={() => Up(tasks.id)}
                            />

                            
                           

                        </div>
                            );

                })
                }
       
          
        </>
    )
}