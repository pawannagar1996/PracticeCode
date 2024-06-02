 import html5 from "../../img/about-page/html5.png"
 import js from "../../img/about-page/js.png"



export default function SkillData(){
    const skillData = [
        {img : html5 , skillName : "html5" , alt : "html5"}  ,
        {img : html5 , skillName : "css3" , alt : "css3"} ,
        {img : html5, skillName : "bootstrap5" , alt : "bootstrap5"} ,
        {img : html5 , skillName : "tailwind" , alt : "tailwind"} ,
        {img : js , skillName : "javascript" , alt : "javascript"},
        {img : js , skillName : "reactjs" , alt : "reactjs"},
        {img : js , skillName : "redux" , alt : "redux"},
        {img : js , skillName : "github" , alt : "github"}
    ]
    
    return(
        <>
        {skillData.map((item , index)=>{
return(
    <div className="skills-items" key={index}>
    <img src={item.img} alt={item.alt}/>
    <h4>{item.skillName}</h4>
  </div>
)
        })}
        
        </>
    )

}