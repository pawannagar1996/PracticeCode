import "./navbar.css"

const Navbar = ()=>{

    return(
        <div className="n-wrapper header-wrapper">

            <header className="layout">

            <div className="n-left">
                <div className="n-logo">pawan</div>
            </div>

            <div className="n-right">
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Works</a></li>
                    <li><a>Contact Us</a></li>
                </ul>

                <button className="nav-btn">logIn</button>
            </div>

            </header>

        </div>
    )
}

export default Navbar