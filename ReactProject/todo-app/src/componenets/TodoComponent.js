import { useRef, useState } from "react";

function TodoComponent() {
  const [todos, updateTodos] = useState([]);

  const [addButtonDisable, updateAddButtonDisable] = useState(true);

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
                  onChange={handleInputTextChange}
                />
              </div>
              <button
                onClick={(e) => addTodoList(e)}
                disabled={addButtonDisable}
              >
                Add
              </button>
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
      editing: false,
    };
    const newTodos = [...todos];
    newTodos.push(item);
    updateTodos(newTodos);
    textRef.current.value = "";
    updateAddButtonDisable(true);

    // console.log(todos)
  }

  function renderList() {
    return (
      <>
        <ul>
          {todos.map((item) => {
            const { id, text, status, editing } = item;
            return (
              <li
                key={id}
                id={"li--" + id}
                className={getTodoStatusClass(status)}
              >
                {editing ? (
                  <input defaultValue={text} id={"input-todo--" + id} />
                ) : (
                  <span>{text}</span>
                )}

                <div>
                  {editing ? null : (
                    <button
                      id={"btn-done--" + id}
                      onClick={handleMarkDone}
                      disabled={status === "done"}
                    >
                      {status}
                    </button>
                  )}
                  {/* {editing !== true  && (
                  <button
                    id={'btn-done--'+id}
                    onClick={handleMarkDone} 
                    disabled={status === 'done'}>
                     {status}
                  </button>
                )} */}
                  <button
                    id={"btn-edit--" + id}
                    onClick={handleEdit}
                    disabled={status === "done"}
                  >
                    {editing ? "edit done" : "edit"}
                  </button>
                  <button id={`${id}-delete`} onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  function handleMarkDone(event) {
    let id = event.target.id;
    id = id.split("--")[1];
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index], status: "done" };
    const newTodos = [...todos];
    newTodos[index] = todo;
    updateTodos(newTodos);
    // console.log("index", index);
  }

  function getTodoStatusClass(status) {
    if (status === "active") {
      return "active";
    } else {
      return "done";
    }
  }

  function handleInputTextChange(event) {
    let inputText = event.target.value;
    // console.log('input text has----', inputText, ' and length is', inputText.length);
    if (inputText.length > 0) {
      updateAddButtonDisable(false);
      console.log("test");
    } else {
      updateAddButtonDisable(true);
      console.log("no");
    }
  }

  function handleEdit(event) {
    let id = event.target.id;
    id = id.split("--")[1];
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index] };
    // console.log('todo.editing ', todo.editing);
    if (todo.editing) {
      const inputTodoEle = document.getElementById("input-todo--" + id);
      console.log("inputTodoEle ", inputTodoEle);
      console.log("inputTodoEle value", inputTodoEle.value);
      todo.text = inputTodoEle.value;
    }

    todo.editing = !todo.editing;

    const newTodos = [...todos];
    newTodos[index] = todo;
    updateTodos(newTodos);
  }

  function handleDelete(event) {
    const id = event.target.id.split("-")[0];
    console.log(id);

    const cloneList = todos.filter((item) => item.id !== id);
    updateTodos(cloneList);
  }

  return <>{renderTodoAdderForm()}</>;
}

export default TodoComponent;
