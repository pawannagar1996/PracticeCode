

import React from "react"

class ClassMethodUpdateParameter extends React.Component{

constructor(){
super()

console.log("constructor is working")

this.state={Count : 0,show : true}

}

getSnapshotBeforeUpdate(preProps,preState){
    console.log("snapShot preProps :- " , preProps)
    console.log("snapShot prevState :- " , preState)

    return preProps
    
}

componentDidUpdate(preProps,preState,snapShot){
console.log("componentDidUpdateis working")
console.log("preProps : " , preProps)
console.log("prevState : " , preState)
}

render(){
return(
<>
<h2>React Lifecycle </h2>
<h2>componentDidUpdat parameter </h2>

<button onClick={()=>this.setState({show :!this.state.show})}>name change {this.state.show ? "apun hega" : "nahi hain"}
</button>

<p>state : {this.state.Count}</p>
<button onClick={()=>this.setState({Count : this.state.Count+1})}>update</button>

<p>props : {this.props.passData}</p>
</>
)
}

}

export default ClassMethodUpdateParameter