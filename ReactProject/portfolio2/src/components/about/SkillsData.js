 import html5 from "../../img/about-page/html5.png"
 import css from "../../img/about-page/css.png"
 import bootstrap from "../../img/about-page/bootstrap.png"
 import tailwind from "../../img/about-page/tailwind.png"
 import js from "../../img/about-page/js.png"
 import react from "../../img/about-page/react.png"
 import redux from "../../img/about-page/redux.png"
 import github from "../../img/about-page/github.png"



export default function SkillData(){
    const skillData = [
        {img : html5 , skillName : "html5" , alt : "html5"}  ,
        {img : css , skillName : "css3" , alt : "css3"} ,
        {img : bootstrap, skillName : "bootstrap5" , alt : "bootstrap5"} ,
        {img : tailwind , skillName : "tailwind" , alt : "tailwind"} ,
        {img : js , skillName : "javascript" , alt : "javascript"},
        {img : react , skillName : "reactjs" , alt : "reactjs"},
        {img : redux , skillName : "redux" , alt : "redux"},
        {img : github , skillName : "github" , alt : "github"}
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