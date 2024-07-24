
import TodoItems from './TodoItems'

function TodoList(props) {

  const {list} = props

  return (
    <>
    <ul className='todo-list'>
{list.map((item)=>{
        const {id , text , status} =item
        return    <TodoItems id={id} text={text} status={status} />
    })
}


 
    </ul>
    </>
  )
}

export default TodoList