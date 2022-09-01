import { useEffect } from "react";
import { gsap } from "gsap";

import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import  {  SplitText,  DrawSVGPlugin  }  from  "gsap-trial/all" ;
import BoxCaroussel from "./BoxCaroussel";
import Actu from "./Actu";
import Article from "./Article";
import Footer from "./Footer";
const Page = () => {
    
    const text = "incroyable"

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".box", {
            scrollTrigger: {
                trigger: ".boxHeader",
                start: "bottom top",
                end: "bottom center",
             
                markers: true
            },
            opacity: 1,
            duration: 1
        });
        gsap.to(".box1", {
            scrollTrigger: {
                trigger: ".box",
                start: "bottom+=100 center",
                end: "bottomcenter",
                markers: true , 
            },
           
           opacity : 1,
        })
       
        
    })
    return (
     
        <><div className="contener2">
            <Header />
            <BoxCaroussel />
            <Actu />
        </div><div className="contener3">
                <Article />
            
            
            </div>
            </>
            
            
    
        
      
    );
};

export default Page;