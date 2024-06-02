import React from "react";
import AnimatedCursor from "react-animated-cursor"

export const AnimatedCursorWindow = () => {
//   const rootChange = document.querySelector(":root").style.setProperty("--PrimaryColor","rgb(33, 255, 255)")
//   const root = document.querySelector(":root")
//   const rootStyle = getComputedStyle(root)
//   const PrimaryColor = rootStyle.getPropertyValue("--PrimaryColor");
//  const last = PrimaryColor.slice(4,PrimaryColor.length-1)
//   console.log(0)
    return (
        <>
        <AnimatedCursor 
       innerSize={8}
       outerSize={40}
       color={"255, 180, 0"}
       outerAlpha={0.2}
       innerScale={0.7}
       outerScale={2}
       clickables={[
         'a',
         'input[type="text"]',
         'input[type="email"]',
         'input[type="number"]',
         'input[type="submit"]',
         'input[type="image"]',
         'label[for]',
         'select',
         'textarea',
         'button',
         '.link'
       ]}
    // color="#fff"
    // innerSize={8}
    // outerSize={35}
    // innerScale={1}
    // outerScale={1.7}
    // outerAlpha={0}
    // outerStyle={{
    //   mixBlendMode: 'exclusion'
    // }}
        />
        </>
    );
  };
  