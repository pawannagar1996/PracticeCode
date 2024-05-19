import { useContext } from "react";
import {Data} from "./CreateContext"

function UseContext(){

    const getData = useContext(Data)
    return(
        <>
        <h1>UseConteat Page</h1>
        <p>{getData}</p>
        </>
    )
}


export default UseContext;