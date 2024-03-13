function StudentSendChildData(props){
const a = "react"
    return (
    <>
    <h2>Child Component</h2>
    <button onClick={()=>props.passData(a)}>submit</button>
    </>
    )
}

export default StudentSendChildData