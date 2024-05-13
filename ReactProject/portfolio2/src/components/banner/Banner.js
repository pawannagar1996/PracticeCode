import React from "react";
import "../../../src/App.css"
import "./banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="left"></div>
      <div className="right">
        <h1>
        <span>.I'M Pawan Nagar</span><span>Web Devloper</span>
        </h1>
        <p>
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around me
        </p>
        <button><span>More About Me</span><span>i</span></button>
      </div>
    </div>
  );
};
