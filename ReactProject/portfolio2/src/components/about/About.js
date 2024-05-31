import React from "react";
import "./about.css";
import SkillData from "./SkillsData";
export const About = (props) => {
  props.one()
  return (
    <div className="wrapper">
      <div className="aboutMe layout pTB100">
        <div className="main-title">
          <h1>
            About <span>Me</span>
          </h1>
          <span className="main-title-title-bg">Resume</span>
        </div>

        <div className="leftRight">
          <div className="left">
            <div className="left-side-row left-side-row-1">
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
            </div>
            <div className="left-side-row left-side-row-2">
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <h2>What I Love To Do</h2>
            <p>
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <button className="magnatic" onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}>
              <span>Download Cv</span>
              <span>i</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======= my skill ====== */}

      <div className="skills layout">
        <div className="main-title">
          <h1>
            my <span>skills</span>
          </h1>
          <span className="main-title-title-bg">Expertise</span>
        </div>

        <div className="leftRight">
          <div className="left">
            <div className="skills-container">
             <SkillData />
              
              
             
            </div>
          </div>

          <div className="right">
            <h2>left</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
