import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animation, setAnimation2 } from "../features/animation.slice";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [class2, setClass2] = useState("header");
  useEffect(() => {
    if (
      window.location.pathname === "/article" ||
      window.location.pathname === "/contact" ||
      window.location.pathname === "/manif"
    ) {
      setClass2("header2");
    }
  }, []);

  const animation = () => {
    const tl = gsap.timeline();
    tl.to(".box1Article", {
      y: "-100%",
      duration: 0.5,
      onComplete: () => {
        navigate("/");
        dispatch(setAnimation2(true));
      },
    });
  };

  // useEffect(() => {
  //     animation();
  // }, [toggle===true]);
  if (toggle === true) {
    animation();
  }

  useEffect(() => {
   
  }, []);

  return (
    <div className={class2}>
      <div className="topHeader">
        <img src="./la-cgt.png" alt="" />
    
      </div>
      <div className="bottomHeader">
        {" "}
        <a className="link link1" style={{ cursor: "pointer" }} onClick={() => setToggle(true)}>
          Accueil
        </a>
        <Link className="link" to="/contact">Nous Contacter</Link>{" "}
        <Link className="link" to="/manif">Prochaine mobilisation</Link>
      </div>
    </div>
  );
};

export default Header;
