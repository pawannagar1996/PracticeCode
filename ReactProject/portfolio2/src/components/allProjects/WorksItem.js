

const WorksItem = ({item}) => {

    return(
        <>
<div className="work-card" key={item.id}>
    <img src ={item.image} alt="" className="work-img"/>
    <h3 className="work-title">{item.title}</h3>
    <a href="#" className="work button">Demo</a>

</div>
        </>
    )
}

export default WorksItem