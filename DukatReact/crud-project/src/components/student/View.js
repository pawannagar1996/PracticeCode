import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [details, getDetails] = useState([]);
  const navicate = useNavigate()

  async function getStudentDetails() {
    try {
      let getStudentRecord = await axios.get(
        `http://localhost:3333/studentsData/${id}`
      );
      // console.log("getStudentRecord :", getStudentRecord.data);

      getDetails(getStudentRecord.data);

      // console.log(details);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    getStudentDetails();
  }, [id]);


  function onBackList(){
    navicate("/list")
  }

  return (
    <>
      <h3>view page</h3>
      <button onClick={onBackList}>bact to list</button>
      <table border="1px">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {
          <tr>
            <td>{details.id}</td>
            <td>{details.studentName}</td>
            <td>{details.studentEmail}</td>
          </tr>
        }
      </table>
    </>
  );
}

export default View;
