import React from "react";
import "./banner.css";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



export const Banner = (props) => {

// const root = document.querySelector(":root").style.setProperty("--PrimaryColor","rgb(255, 255, 255)")

// console.log("root",root)

  return (
    <div className="banner">
      <div className="left" ></div>
      <div className="right">
       
        <h1>
        <span>.I'M Pawan Nagar</span>
        <span>Web Devloper</span>
        </h1>
      
        <p >
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around me
        </p>
        <Link to="/about"><button className="magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}><span>More About Me</span>
        <span><FaArrowRight />
        </span></button>
        </Link >
      </div> 
    
    </div>
   
  );
};
