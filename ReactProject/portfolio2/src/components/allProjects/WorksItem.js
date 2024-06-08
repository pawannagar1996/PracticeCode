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
   
    <h3 className="work-title">{item.title}</h3>
    <a href="#" className="work-button">Preview</a>

   

</motion.div>
        </>
    )
}

export default WorksItem