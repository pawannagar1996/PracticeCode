import { useState } from "react"


export function useHooks() {

  const [list , updateList] = useState([
    {id:""+Date.now() , text:  "todo item one", status:"done"}
])



function addItem(text){
  console.log(text)

   const item = {
    id:""+Date.now() , text , status:"active"
   }
   const cloneList= [...list]

  cloneList.push(item)
  updateList(cloneList)

}

  return {
    list,
addItem
  }
}