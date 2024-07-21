
import React from 'react'

function TodoItems(props) {

const {text} = props

  return (
    <>
     <li className='todo-item'>
        <p>
{text}
        </p>
        <div className='btns'>
            <button>activce</button>
            <button>edit</button>
            <button>delete</button>
        </div>
    </li>
    </>
  )
}

export default TodoItems