import { useEffect, useState } from "react";
import { AllProjectData, ProjectNev } from "./AllProjectData";
import WorksItem from "./WorksItem";
import "./allProjects.css";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(AllProjectData);
    } else {
      const newProject = AllProjectData.filter((project) => {
        return project.category === item.name;
      });

      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div className="work-filter">
        {ProjectNev.map((item, index) => { 
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work-item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      
      <div className="work-container">
        {projects.map((item, index) => {
          return <WorksItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
