

const Navbar = ()=>{

    return(
        <div className="n-wrapper">

            <div className="n-left">
                <div className="n-logo">pawan</div>
            </div>

            <div className="n-right">
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <button>logIn</button>
            </div>

        </div>
    )
}

export default Navbar