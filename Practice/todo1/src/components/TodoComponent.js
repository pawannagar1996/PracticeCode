import React from 'react'
import AddTodoComponent from './AddTodoComponent'
import TodoList from './TodoList'

function TodoComponent() {
  return (
    <div className='wrapper'>
    <AddTodoComponent />
    <TodoList />
    </div>
  )
}

export default TodoComponent