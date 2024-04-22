import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [data, setData] = useState();

  async function getData() {
    const getDataAxios = await axios.get("http://localhost:3333/studentsData");
    // console.log(getDataAxios.data);
    setData(getDataAxios.data);
  }
  useEffect(() => {
    getData();
  }, []);

  async function deleteHandle(getId) {
    const freshData = await axios.delete(
      `http://localhost:3333/studentsData/${getId}`
    );
    // console.log(freshData);
    getData();
  }

  return (
    <>
      <h1>List</h1>
      <table border="1px">
        <tr>
          <th>s.no</th>
          <th>Name</th>
          <th>Email</th>
          <th colSpan={3}>Action</th>
        </tr>
        {data?.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.studentName}</td>
                <td>{item.studentEmail}</td>
                <td>
                  <Link to={`/view/${item.id}`}>View</Link>
                </td>
                <td><Link to={`/edit/${item.id}`}>Edit</Link></td>
                <td>
                  <button
                    onClick={() => {
                      deleteHandle(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}

export default List;
