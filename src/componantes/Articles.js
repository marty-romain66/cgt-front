import React, {useState, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Articles = ( {post}) => {
  const [toggle, setToggle] = useState(false);
 const datas = post;
 console.log(datas);


const animation = () => {
  for (let i = 0; i < datas.length; i++) {
    
}

 useEffect(() => {
    animation()
  

 }, []);
 
 
    return (

        <>
      <div className="boxArticles">
       
        {datas?.map((data) => (

          
              <div className="blog-card" id={"article" + data.id} >
                <div className="meta">
                  <div
                    className="photo"
                    style={{
                        backgroundImage: `url("https://radiant-hollows-62118.herokuapp.com${data.attributes.media.data.attributes.url}")`,
                      }}
                  ></div>
                  <ul className="details">
                    <li className="author">
                      <a href="#"></a>
                    </li>
                    <li className="date"></li>
                    <li className="tags">
                      <ul>
                        <li>
                          <a href="#"> </a>
                        </li>
                        <li>
                          <a href="#"></a>
                        </li>
                        <li>
                          <a href="#"></a>
                        </li>
                        <li>
                          <a href="#"></a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="description">
                  <h1> {data.attributes.title} </h1>

                  {data.attributes.soustitre !==null ? <h2> {data.attributes.soustitre} </h2> : null}
                  

                  <p>
                    {data.attributes.contenu}
                    <span></span>
                    
                  </p>
                  <p className="read-more">
                    <a href="#">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
        
        ) )}
      </div>
    
        

     
    </>
    );
};

export default Articles;