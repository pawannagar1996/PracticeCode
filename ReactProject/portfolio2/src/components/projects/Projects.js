// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { GiArmoredBoomerang } from "react-icons/gi";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import work1 from "../../img/all-projects/1.jpg";
import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <div className="wrapper">
      <div className="projects layout pTB100">
        <div className="main-title">
          <h1>
            my <span>projects</span>
          </h1>
          <span className="main-title-title-bg">works</span>
        </div>

        <div className="project-slider">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={work1} />
              <div className="SwiperSlideContent">
                <h3>react</h3>
               <span> <a href="#" className=" tooltip"><MdPreview /><span class="tooltiptext">Preview</span></a>
               <a href="#"  className=" tooltip"><FaGithub /><span class="tooltiptext">Github</span></a></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={work1} />
              <div className="SwiperSlideContent">
                <h3>react</h3>
               <span> <a href="#" className=" tooltip"><MdPreview /><span class="tooltiptext">Preview</span></a>
               <a href="#"  className=" tooltip"><FaGithub /><span class="tooltiptext">Github</span></a></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={work1} />
              <div className="SwiperSlideContent">
                <h3>react</h3>
               <span> <a href="#" className=" tooltip"><MdPreview /><span class="tooltiptext">Preview</span></a> 
               <a href="#" className=" tooltip" ><FaGithub /><span class="tooltiptext">Github</span></a></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={work1} />
              <div className="SwiperSlideContent">
                <h3>react</h3>
               <span> <a href="#" className=" tooltip"><MdPreview /><span class="tooltiptext">Preview</span></a> 
               <a href="#" className=" tooltip" ><FaGithub /><span class="tooltiptext">Github</span></a></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={work1} />
              <div className="SwiperSlideContent">
                <h3>react</h3>
               <span> <a href="#" className=" tooltip"><MdPreview /><span class="tooltiptext">Preview</span></a> 
               <a href="#" className=" tooltip" ><FaGithub /><span class="tooltiptext">Github</span></a></span>
              </div>
            </SwiperSlide>
        
          </Swiper>
        </div>

        <div className="projectBtn">
         <Link to="/allprojects"> <button
            className="magnatic"
            onMouseEnter={() => {
              props.one();
            }}
            onMouseOut={() => {
              props.two();
            }}
          >
            <span>All projects</span>
            <span>
              <GiArmoredBoomerang />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
