import React from "react";
import "./banner.css";




export const Banner = (props) => {

  props.one()

  return (
    <div className="banner">
      <div className="left magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}></div>
      <div className="right">
       
        <h1>
        <span className="magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}>.I'M Pawan Nagar</span>
        <span className="magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}>Web Devloper</span>
        </h1>
      
        <p className="magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}>
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around me
        </p>
        <button className="magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}><span>More About Me</span><span>i</span></button>
      </div>
    
    </div>
   
  );
};
