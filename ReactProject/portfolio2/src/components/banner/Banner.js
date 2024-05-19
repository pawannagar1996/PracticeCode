import React from "react";
import "../../../src/App.css"
import "./banner.css";




export const Banner = (props) => {

  props.one()

  return (
    <div className="banner">
      <div className="left magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}></div>
      <div className="right">
       
        <h1 className="magnatic" onMouseOut={()=>{props.two()}}>
        <span>.I'M Pawan Nagar</span><span>Web Devloper</span>
        </h1>
      
        <p className="magnatic" onMouseOut={()=>{props.two()}}>
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around me
        </p>
        <button className="magnatic" onMouseOut={()=>{props.two()}}><span>More About Me</span><span>i</span></button>
      </div>
    
    </div>
   
  );
};
