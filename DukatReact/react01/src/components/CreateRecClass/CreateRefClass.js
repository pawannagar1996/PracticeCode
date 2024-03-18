import React, { createRef } from "react";

class CreateRefClass extends React.Component{
    constructor(){
        super()

        this.createRefData = createRef()
    }

    myFun(){
        console.log(this.createRefData)
    }

    render(){

        return(
            <>
            <h1>Create Ref Class</h1>
            <input type="text" ref={this.createRefData}/>
            <button onClick={()=>this.myFun()}>Submit</button>
            </>
        )
    }
}

export default CreateRefClass;