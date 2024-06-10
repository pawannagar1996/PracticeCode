import { About } from "../about/About";
import AllProjects from "../allProjects/AllProjects";
import { Banner } from "../banner/Banner";
import Projects from "../projects/Projects";




export default function Magnative() {

    function magnaticEffect(){
        const magnaticElements =document.querySelectorAll(".magnatic")
        magnaticElements.forEach((magnaticElement)=>{
        
            magnaticElement.addEventListener("mousemove",function(e){
                let react = magnaticElement.getBoundingClientRect()
    
                let x = (e.clientX - react.left - react.width / 2) * 0.5
                let y = (e.clientY - react.top - react.height / 2) * 0.5
                // console.log("in")

                magnaticElement.style.transform = "translate("+x+"px,"+y+"px)";
                magnaticElement.style.scale = "1.1";
                magnaticElement.style.transition = "0.1s ease , 0.3s ease";
                magnaticElement.style.transitionProperty = "transform,scale";
                magnaticElement.style.curser = "pointer";


            })

           
        });
    }


    function magnaticOut(){
        const magnaticElements =document.querySelectorAll(".magnatic")
        magnaticElements.forEach((magnaticElement)=>{
           
            //reset text

magnaticElement.style.transform = "translate(0px,0px)";
                magnaticElement.style.scale = "1";
                magnaticElement.style.transition = "0.3s ease , 0.3s ease";
                magnaticElement.style.transitionProperty = "transform,scale";

        });
    }
   

  return (
   <>
   <Banner one={magnaticEffect} two={magnaticOut}/>
   <About one={magnaticEffect} two={magnaticOut}/>

   <Projects one={magnaticEffect} two={magnaticOut}/>

   <AllProjects />
 

   </>
  )
}


