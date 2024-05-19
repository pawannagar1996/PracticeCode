import {BrowserRouter , Routes , Route , Link} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

function Routing(){
    return(
        <>
    
        <BrowserRouter>
        <div className="headerDesign">
            <p>pawan</p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>

        
        <Routes >
            <Route exact path="/" element={<Home/>} ></Route>
            <Route exact path="/about" element={<About/>} ></Route>
            <Route exact path="/services" element={<Services/>} ></Route>
            <Route exact path="/contact" element={<Contact/>} ></Route>

            <Route path="*" element={<PageNotFound/>} ></Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}


export default Routing;