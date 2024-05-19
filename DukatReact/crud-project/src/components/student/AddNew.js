import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function AddNew() {
  const [data, setData] = useState({
    studentName: "",
    studentEmail: "",
  });

  const navigate = useNavigate();

  function storeData(e) {
    console.log(e.target.value);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(data);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const getPostResult = await axios.post(
        "http://localhost:3333/studentsData",
        data
      );
      navigate("/list");
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <h1>AddNew</h1>
      <form>
      <input
        type="text"
        name="studentName"
        onChange={(e) => storeData(e)}
      />{" "}
      <br></br>
      <input type="email" name="studentEmail"  onChange={(e) => storeData(e)} />
      <br></br>
      <button onClick={(e) => onFormSubmit(e)}>Add New</button>
      </form>
    </>
  );
}

export default AddNew;
