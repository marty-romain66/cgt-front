import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
<<<<<<< HEAD
import { Routes, Route, Link } from "react-router-dom";
=======
>>>>>>> dd2bc0808bb2e5a832a07f6642df42a9f633014a
gsap.registerPlugin(ScrollTrigger);
const Header = () => {

    const [class2 , setClass2] = useState("header");
useEffect(() => {
<<<<<<< HEAD
if (window.location.pathname === "/article" || window.location.pathname === "/contact" ) {
=======
if (window.location.pathname === "/article") {
>>>>>>> dd2bc0808bb2e5a832a07f6642df42a9f633014a
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
            <div className="bottomHeader"> <Link to="/">Accueil</Link><Link to="/contact">Nous Contacter</Link></div>


            
        </div>
    );
};

export default Header;
