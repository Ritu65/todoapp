import React from 'react'
import "./App.css"
import {FaTrashAlt} from "react-icons/fa"
const Todo = (props) => {
  return <>
  <div className='todo-style'>
    <li><input type="checkbox" className="checkbox-round" />{props.text} </li>
    <FaTrashAlt className='icon' aria-hidden="true" onClick={()=>{
 props.onselect(props.id)}
    }
    />
    </div>
    </>
}

export default Todo;
