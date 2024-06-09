import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

const WorksItem = ({item}) => {

    return(
        <>
<motion.div
layout
animate = {{opacity : 1 , scale :1}}
initial = {{opacity : 0.8 , scale :0.6}}
exit = {{opacity : 0.8 , scale :0.6}}
className="work-card" key={item.id}>
    <img src ={item.image} alt="" className="work-img"/>
   
   <div className="work-card-inner">
    <h3 className="work-title">{item.title}</h3>
   <span>
    <a href="#" className="work-button tooltip"><MdPreview /><span class="tooltiptext">Preview</span></a>
    <a href="#" className="work-button tooltip"><FaGithub /><span class="tooltiptext">Github</span></a>
   </span></div>
   

</motion.div>
        </>
    )
}

export default WorksItem