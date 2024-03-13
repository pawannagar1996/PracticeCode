// import React from "react"

// class ClassReactjsLifeCycle extends React.Component{

// constructor(){
// super()
// console.log("constructor is working")
// }

// componentDidMount(){

// }

// render(){
// return(
// <>
// <h2>React Life </h2>
// </>
// )
// }
// }

import React from "react"

class ClassReactjsLifeCycle extends React.Component{

constructor(){
super()

console.log("constructor is working")

this.state={Count : 0}

}

componentDidUpdate(){
console.log("componentDidUpdateis working")
}

render(){
return(
<>
<h2>React Life </h2>
<p>{this.state.Count}</p>
<button onClick={()=>this.setState({Count : this.state.Count+1})}>update</button>
</>
)
}

}

export default ClassReactjsLifeCycle