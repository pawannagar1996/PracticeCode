

function Home(props){

    console.log("home",props)

    return(
        <>
        <main>

            <p>{props.data}</p>
            <div className="cart-items">
                <div>
                    <div className="name">
                        dell laptop
                    </div>

                    <div className="pricing">
                        4999
                    </div>
                    <button onClick={()=>props.addTocardHandler({produtName:"dell laptop",pricing:"4999"})}>Add To Cart</button>

                
                </div>
            </div>
        

        </main>
        
        </>
    )
}

export default Home;