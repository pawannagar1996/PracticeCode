// Import Swiper React components
import React from "react";
import "./allProjects.css";
import Works from "./Works";

function AllProjects() {
  return (
    <div className="wrapper">
      <div className="all-projects layout pTB100">
        
      <div className="main-title">
          <h1>
            All <span>projects</span>
          </h1>
          <span className="main-title-title-bg">all works</span>
        </div>

       <Works />

       
      </div>
    </div>
  );
}

export default AllProjects;
