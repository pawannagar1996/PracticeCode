
import React from 'react'

function TodoItems(props) {

const {id , text , status} = props

  return (
    <>
     <li key={"key"+id} className={status==="active" ? "todo-item active" : "done todo-item"} >
<p>{text} </p>
        <div className='btns'>
            <button id={"done--"+id}>{status}</button>
            <button>edit</button>
            <button>delete</button>
        </div>
    </li>
    </>
  )
}

export default TodoItems