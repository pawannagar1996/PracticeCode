import axios from "axios"
import {useEffect, useState} from "react"
function StudentsRecorde(){

    const [data,setData] = useState()

async function getData(){
    const getAxiosData = await axios.get("http://localhost:3333/studentsData")
    console.log(getAxiosData.data)
    setData(getAxiosData.data)

}

    useEffect(() => {
        getData()
    }, [])
    
    return(
        <>
        <h1>Student Record</h1>
        {
            data?.map((item,index)=>
        {
return<p key={index}>{item.studentName}</p>
        })
        }
        </>
    )
}

export default StudentsRecorde;