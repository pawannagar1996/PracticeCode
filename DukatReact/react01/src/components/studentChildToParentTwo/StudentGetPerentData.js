import StudentSendChildData from "./StudentSendChildData"

function StudentGetPerentData(){

    function childData(a){
        console.log(a)

}
    return (
        <>
        <h2>parent Component</h2>
        <StudentSendChildData passData={childData} />
        </>
        )
}

export default StudentGetPerentData