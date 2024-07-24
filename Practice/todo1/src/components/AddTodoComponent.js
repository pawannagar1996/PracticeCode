import { useRef, useState } from 'react'

function AddTodoComponent(props) {

  const {addItem} = props

  const inputRef = useRef()
  const [addButtonDisable , updateAddButtonDisable] = useState(true)

function handleAddItem(){
const text = inputRef.current.value;
// console.log(text)
addItem(text)

inputRef.current.value = ""
updateAddButtonDisable(true)
}

function checkLength(e){

  const inputLength = e.target.value.trim().length
// console.log(inputLength)

if(inputLength > 0){
  updateAddButtonDisable(false)
}else{updateAddButtonDisable(true)}

}

  return (
    <>
    <div className='todo-add'>
        <input type='text' id='addInput' ref={inputRef} onChange={(e)=>checkLength(e)}/>
        <button onClick={()=>handleAddItem()} disabled={addButtonDisable}>Add</button>
    </div>



  


    </>
  )
}

export default AddTodoComponent