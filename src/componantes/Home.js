import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Caroussel from "./Caroussel";
import Animation from "./Animation";
import { useDispatch, useSelector } from "react-redux";
import Articles from "./Articles";
import axios from "axios";
import { EmblaCarousel } from "./EmblaCarousel";
import gsap from "gsap";
import { animation, setAnimation2 } from '../features/animation.slice';

const Home = () => {
  const toggle = useSelector((state) => state.animation).animation2;
  const toggleAnim = useSelector((state) => state.animation.animation);
 useEffect(() => {
 if (toggle === true) {
    gsap.fromTo(".box3", {

    y: "100%",
    }, {
    y: 0,
    });
  }
  }, []);
 
 
  const [datas, setDatas] = useState([]);
useEffect(() => {

  axios.get("https://radiant-hollows-62118.herokuapp.com/api/posts?populate=*"
  ).then((response) => {
    console.log(response.data);
    setDatas(response.data);
  }
  ).catch((error) => {
    console.log(error);
  }
  )

}, []);


  return (
    <div className="box">

      {toggleAnim !== true ? (  
      <Animation />
      ) : ( null )}
      <Header />
      <div className="box3">
      <Caroussel />
      <Articles  post={datas.data}  />
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
