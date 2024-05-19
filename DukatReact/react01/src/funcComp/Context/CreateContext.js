import { createContext } from "react";
import Context2 from "./Context2";
import UseContext from "./UseContext";


const Data = createContext()

export default function CreateContext(){
    const course = "react"
    return(
        <>
        <h1>CreateContext Page</h1>
<Context2 />

<Data.Provider value = {course}>
    <UseContext />
</Data.Provider>
        </>
    )
}


export {Data};