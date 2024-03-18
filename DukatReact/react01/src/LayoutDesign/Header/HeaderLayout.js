import "./Header.css"

function HeaderLayout(){

    return(
        <header className="header">
            <div className="logo"><a href="#">Logo</a></div>
           
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderLayout;