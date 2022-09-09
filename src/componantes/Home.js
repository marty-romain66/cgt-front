import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Caroussel from "./Caroussel";
import Animation from "./Animation";

import Articles from "./Articles";
import axios from "axios";
import { EmblaCarousel } from "./EmblaCarousel";
import gsap from "gsap";


const Home = () => {
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
      
      <Animation />
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
