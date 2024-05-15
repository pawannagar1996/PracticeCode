import { useState } from 'react';
import data from "../../Data"
import './style.css';

export default function Accorddion(){


 
    const [selected , setSelected] = useState(null)

    console.log(selected)

    function handleSingleSelection(id){
console.log("id" , id)
setSelected(id === selected ? null : id)
    }

    return(
        <div className="cover">
        {
            data && data.length > 0 ? 
            data.map((dataItem)=><div className='items'>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="question">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className='answer'>{dataItem.answer}</div>
                        : null
                    }

                </div>
            )
            : <p>No data found</p>
        }
        </div>
    )
}