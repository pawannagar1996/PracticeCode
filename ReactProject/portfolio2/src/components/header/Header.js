import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { RiProjectorFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";



import "./header.css"
import {Link, NavLink } from "react-router-dom"

const Header = () =>{

    return(
        <>
        <header>
       
            <nav>
                <ul>
                    <li><NavLink to="/" className={(e)=> e.isActive ? "active" : ""}>
                    <FaHome />
                {/* <span>Home</span> */}
                    </NavLink></li>
                    <li><NavLink to="/about" className={(e)=> e.isActive ? "active" : ""}>
                    <FaUserTie />
                    </NavLink></li>
                    <li><NavLink to="/projects" className={(e)=> e.isActive ? "active" : ""}>
                    <RiProjectorFill />
                    </NavLink></li>
                    <li><NavLink to="/contact" className={(e)=> e.isActive ? "active" : ""}>
                    <MdContactMail />
                    </NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header