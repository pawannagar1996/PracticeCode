import React from 'react'
import TodoItems from './TodoItems'

function TodoList() {

    const todoListArray = [
        "todo item one",
        "todo item Two",
        "todo item Three"
    ]

  return (
    <>
    <ul className='todo-list'>

{
    todoListArray.map((item)=>{

        return    <TodoItems text={item} />
    })
}


 
    </ul>
    </>
  )
}

export default TodoList