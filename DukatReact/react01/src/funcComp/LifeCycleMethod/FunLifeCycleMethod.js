import { useEffect } from "react";
import { useState } from "react";

function FunLifeCycleMethod(){

    console.log("bahar ka section")

    const [add,setAdd] = useState(0)
    const [count,setCount] = useState(1)

    useEffect(()=>{
        console.log("useEffect is working aad par update")
    },[add,count])


    //unmounting main return sa kaam krwate h

    useEffect(()=>{
        console.log("useEffect is working mounting")
        // anything is here fired on the component mount

        return ()=>{

            console.log("useEffectReturn is working")
            // anything is here fired on the component unmount

        }
    },[])


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

export default FunLifeCycleMethod;