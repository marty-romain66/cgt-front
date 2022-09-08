import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Caroussel from "./Caroussel";
import Animation from "./Animation";

import Articles from "./Articles";
import axios from "axios";
import { EmblaCarousel } from "./EmblaCarousel";
<<<<<<< HEAD
import gsap from "gsap";
=======
>>>>>>> dd2bc0808bb2e5a832a07f6642df42a9f633014a


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
      <Caroussel />
      <Articles  post={datas.data}  />
      <Footer/>
    </div>
  );
};

export default Home;
