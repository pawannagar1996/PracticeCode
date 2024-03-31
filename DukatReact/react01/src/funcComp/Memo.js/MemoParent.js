import { useCallback, useState } from "react";
import MemoChild from "./MemoChild";

function MemoParent() {

    let [item, updateItem] = useState(5)
    let [arrayOne, updateArray] = useState(["item 1", "item 2"])

    function myFun() {
        console.log("button working")
        updateItem(item += 1)
    }
    let addToData = useCallback(() => {
        console.log("child button working")
        updateArray([...arrayOne, "new item"])
    }, [arrayOne])
    return (
        <><h1>Memo parent</h1>
            <MemoChild passData={arrayOne} funData={addToData} />
            <p>Count : {item}</p>
            <button onClick={() => myFun()}>add</button>
        </>
    )
}

export default MemoParent;