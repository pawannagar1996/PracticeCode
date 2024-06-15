import "./header.css"
import {Link } from "react-router-dom"

const Header = () =>{

    return(
        <>
        <header>
       
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header