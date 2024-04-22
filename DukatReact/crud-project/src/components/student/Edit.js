import axios from "axios";
import { useEffect , useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

function Edit(){

const {id} =useParams()
const navigate = useNavigate()
const [details, getDetails] = useState([
   {studentName:"",studentEmail:""}
]);

    useEffect(()=>{
        async function getStudentDetails(){

            try{
                let getStudentRecord = await axios.get(`http://localhost:3333/studentsData/${id}`)
                                  getDetails(getStudentRecord.data);                  
            }
            catch(error){console.log(error)}
        }
        getStudentDetails()
         
    },[id])

    // console.log("ee",details)
         

function onCghangeTextFun(e){
    getDetails({
        ...details,
    [e.target.name] : e.target.value
})
console.log(details)
}




async function onformSubmit(e){
   
try{ e.preventDefault();
    console.log("click",details)

    let getUpdateData = await axios.put(`http://localhost:3333/studentsData/${id}`,details)
    console.log("getUpdateResult : ",getUpdateData )
}
catch(error){console.log(error)}
}
// function handleClick(){
//     navigate("/list")
// }
    return(
        <>
        <h1>Edit</h1>

        <form>
      <input type="text" name="studentName" value={details.studentName} onChange={(e) => onCghangeTextFun(e)}  />
      <br></br>
      <input type="email" name="studentEmail" value={details.studentEmail} onChange={(e) => onCghangeTextFun(e)} />
      <br></br>
      <button onClick={(e) => onformSubmit(e)}>Update Data</button>
      </form>
        </>
    )
}

export default Edit;