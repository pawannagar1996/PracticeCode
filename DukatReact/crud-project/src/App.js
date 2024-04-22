import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AddNew from "./components/student/AddNew";
import List from "./components/student/List";
import View from "./components/student/View";
import Edit from "./components/student/Edit";

function App() {
  return (
    <div className="App">
      <h1>main</h1>
      <BrowserRouter>
        <span className="nav">
          <Link to="/home">Home</Link>{" "}
        </span>
        <span className="nav">
          <Link to="/addnew">Add New</Link>
        </span>
        <span className="nav">
          <Link to="/list">list</Link>
        </span>

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/addnew" element={<AddNew />}></Route>
          <Route exact path="/list" element={<List />}></Route>
          <Route exact path="/view/:id" element={<View />}></Route>
          <Route exact path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
