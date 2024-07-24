import React from 'react'
import AddTodoComponent from './AddTodoComponent'
import TodoList from './TodoList'
import {useHooks} from '../hooks/useHooks'

function TodoComponent() {

const {list,addItem} = useHooks();

  return (
    <div className='wrapper'>
    <AddTodoComponent addItem={addItem}/>
    <TodoList list={list}/>
    </div>
  )
}

export default TodoComponent