
import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../service/actions/Actions";

const mapstateToProps = state => ({
data:state
})

const mapDespatchToProps = dispatch => ({
    addTocardHandler:data=>dispatch(addToCart(data))
})

export default connect(mapstateToProps,mapDespatchToProps)(Home)


// export default Home;