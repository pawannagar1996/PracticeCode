import "./DesignComponentExternal.css"
import style from "./DesignComponentModule.module.css"
function DesignComponent(){

    //inline css use in react
    //external use css
    //module css
    //object se bi css chala skte h


    // object css
    const objCss = {
        color : "red",
        backgroundColor : "green"
    }
    return(
        <>
        <h1>Design Component</h1>
        <p className="para2"
        // inline design css
        style={{backgroundColor:"blue"}}>this is a simple paragraph</p>

{/* modulecss */}
        <p className={style.para2}>
            this is use of modle design purpose
        </p>
        
        {/* object se css de na*/}
        <p style={objCss}>
            this is use of object design purpose
        </p>
        </>
    )
}

export default DesignComponent;