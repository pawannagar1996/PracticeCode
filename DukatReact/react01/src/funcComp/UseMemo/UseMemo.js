import { useMemo, useState } from "react";

function UseMemoFun(){

    let [item,updateItem] = useState(5)
    let [count,updateCount] = useState(10)

    let uaeMemoValue = useMemo(()=>{
        console.log("use memo working")

        return item * 5
    },[item])

    return(
        <><h1>Use Memo</h1>
        <p>useMemo : {uaeMemoValue}</p>
        <p>Item : {item}</p>
        <button onClick={()=>updateItem(item+2)}>Update Item</button>
        <p>Count : {count}</p>
        <button onClick={()=>updateCount(count+2)}>Update Count</button>
        </>
    )
}

export default UseMemoFun;