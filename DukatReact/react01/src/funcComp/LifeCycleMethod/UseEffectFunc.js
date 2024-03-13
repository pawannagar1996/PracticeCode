import { useEffect } from "react";
import { useState } from "react";

function UseEffectFunc(){

    const [add,setAdd] = useState(0)
    const [count,setCount] = useState(1)

    useEffect(()=>{
        console.log("useEffect is working")
    },[add])

    return(
        <>
        <h2>Function useEffect</h2>
        <p>Click Add + 1 : {add}</p>
        <button onClick={()=>setAdd(add+1)}>Add</button><br></br>

        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Count</button><br></br>

        {console.log("return is working")}
        </>
    )
}

export default UseEffectFunc;