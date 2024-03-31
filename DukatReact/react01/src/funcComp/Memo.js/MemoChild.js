import { memo } from "react";

function MemoChild({passData,funData}){
    return(
        <><h1>Memo Child</h1>
        {passData.map((itemData,index)=>{
            return <p key={index}>{itemData}</p>
        })}
        <button onClick={funData}>add to cart</button>
        </>
    )
}

export default memo(MemoChild);