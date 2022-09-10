import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import { animation, setAnimation2 } from '../features/animation.slice';
gsap.registerPlugin(ScrollTrigger);

const Articles = ({ post }) => {
  const toggleAnim = useSelector((state) => state.animation).animation2;
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const datas = post;
  console.log(datas);
  const tl = gsap.timeline();
  if (toggle !== false) {
    tl.to(".box3", {
     
    x: "-100%",
    duration: .5,
      onComplete: () => {
        window.scrollTo(0, 0);
        navigate(`/article:${toggle}`);
      },
    });
    
  }

  const animation = () => {
    
    if (datas && toggleAnim !== true) {
      console.log(datas);
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].id !== 9) {
          if (i % 2 === 0) {
            gsap.fromTo(
              `#articles${datas[i].id}`,
              {
                x: 300,
                opacity: 0,
                duration: 1,
              },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: `#articles${datas[i].id}`,
                  start: "top center",
                  end: "top center",
                },
              }
            );
          } else {
            gsap.fromTo(
              `#articles${datas[i].id}`,
              {
                x: -300,
                opacity: 0,
                duration: 1,
              },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: `#articles${datas[i].id}`,
                  start: "top center",
                  end: "top center",
                },
              }
            );
          }
          gsap.fromTo(
            `#articles${datas[i].id} .description span `,
            {
              width: 0,
            },
            {
              width: "400px",
              duration: 1.25,
              scrollTrigger: {
                trigger: `#articles${datas[i].id} `,
                start: "top center",
                end: "top center",
              },
            }
          );
        } else if (datas[i].id == 9) {
          gsap.fromTo(
            `#articles${datas[i].id} .description span `,
            {
              width: 0,
            },
            {
              width: "400px",
              duration: 1.25,
              scrollTrigger: {
                trigger: `#articles${datas[i].id} `,
                start: "top center",
                end: "top center",
              },
            }
          );
        }
      }
    }
  };

  useEffect(() => {
    animation();
  }, [datas]);

  return (
    <>
      <div className="boxArticles">
        {datas ===[] ? ( <div>Chargement...</div> ) : ( 
          <div>
        {datas?.map((data) => (
          <div
            className="blog-card"
            id={"articles" + data.id}
            style={{ cursor: "pointer" }}
            onClick={() => setToggle([data.id])}
          >
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

              {data.attributes.soustitre !== null ? (
                <h2> {data.attributes.soustitre} </h2>
              ) : null}

              <p>
                {data.attributes.contenu.length > 200
                  ? data.attributes.contenu.slice(0, 500) + "..."
                  : data.attributes.contenu}
                <span></span>
              </p>
              <p className="read-more">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setToggle([data.id])}
                >
                  Lire la suite
                </a>
              </p>
            </div>
          </div>
        ) ) }   
        </div>
        ) }

      </div>
    </>
  );
};

export default Articles;
