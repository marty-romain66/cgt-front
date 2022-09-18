import gsap from 'gsap';
import React, {useEffect} from 'react';
import axios from 'axios';

const Article = ({data}) => {


  return (
    <>
     
    {data.data? (
    <div className="box1Article">
    <div className="boxImage">
        <img src={`https://radiant-hollows-62118.herokuapp.com${data.data.attributes.media.data.attributes.url}`} alt="" />
    </div>
    <div className="boxText">
        <h1>{data.data.attributes.title}</h1>
        <p> {data.data.attributes.contenu} </p>
        </div>
 </div> ) : null}
 </>
  );
};

export default Article;