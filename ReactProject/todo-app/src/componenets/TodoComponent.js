import { useRef, useState } from "react";

function TodoComponent() {
  const [todo, updateTodo] = useState([
    { id: "" + Date.now(), text: "default", status: "active" },
  ]);

  const textRef = useRef();

  function renderTodoAdderForm() {
    return (
      <div className="wrapper">
        <div className="left">
          <div>Today Tasks : 5</div>
          <div>complete : 2</div>
          <div>Total : 7</div>
        </div>

        <div className="right">
          <h1>Create Today Tasks</h1>
          <form>
            <div>
              <div>
                <input
                  type="text"
                  name="f-name"
                  id="f-name"
                  placeholder="Write your next task"
                  ref={textRef}
                />
              </div>
              <button onClick={(e) => addTodoList(e)}>Add</button>
            </div>
          </form>
          {renderList()}
        </div>
      
      </div>


    );
  }

  function addTodoList(e) {
    e.preventDefault();
    const item = {
      id: "" + Date.now(),
      text: textRef.current.value,
      status: "active",
    };
    const newTodo = [...todo];
    newTodo.push(item);
    updateTodo(newTodo);
    textRef.current.value = "";

    console.log(todo)
  }

  function renderList(){

    return(
        <>
  <ul>
    {console.log(todo)}
        {
            todo.map((item)=>{
              
                return(
                <li key={item.id}>
                    <p>{item.text}</p>
                    <div>
                        <button>{item.status}</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </li>
                )
            }
            )
        }
         </ul>
      
        </>
    )
  }

  return <>
  {renderTodoAdderForm()}
 
 
  </>;
}

export default TodoComponent;
