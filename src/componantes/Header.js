import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route, Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {

    const [class2 , setClass2] = useState("header");
useEffect(() => {
if (window.location.pathname === "/article" || window.location.pathname === "/contact"|| window.location.pathname === "/manif" ) {
    setClass2("header2");
}
}, []);



useEffect(() => {
    const tl = gsap.timeline()
tl.to('.topHeader span', {
opacity: 1,
duration: 1,
delay: 3,   
})
tl.to ('.topHeader span', {
    letterSpacing: '0.3em',
    duration: 1,
})
}, [])



    return (
        <div className={class2}>
             
            <div className="topHeader">
                <img src="./la-cgt.png" alt="" />
                <span className='acal'>A.C.A.L</span>
            </div>
            <div className="bottomHeader"> <Link to="/">Accueil</Link><Link to="/contact">Nous Contacter</Link> <Link to="/manif">Prochaine mobilisation</Link></div>


            
        </div>
    );
};

export default Header;
