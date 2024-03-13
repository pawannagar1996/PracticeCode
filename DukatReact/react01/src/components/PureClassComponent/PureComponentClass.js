import {PureComponent} from "react"
class PureComponentClass extends PureComponent{

    constructor(){

        super()

        this.state = {
            count : 0,
        }
    }


    myFun(){

        console.log("myfun is working")

        this.setState({count:1})
    }

    render(){
console.log("render is working")
        return(
            <>
            <h2>PureComponent</h2>
            <p>count : {this.state.count}</p>

            <button onClick={()=>this.myFun()}>submit</button>
            </>
        )
    }
}

export default PureComponentClass