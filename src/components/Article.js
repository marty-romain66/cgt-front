import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import OneArticle from "./OneArticle";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    axios.get("http://90.113.78.165:80/api/posts?populate=*").then((res) => {
      console.log(res.data);
      setArticle(res.data);
    });
  }, []);

  useEffect(() => {
    const animGsap = () => {
      const tl = gsap.timeline();
      tl.to(".boxArticles ", {
        marginLeft: "-1900px",
      });

      tl.to(".boxArticles ", {
        display:"none"
      })
      tl.fromTo(".oneArticle", {
        opacity: 0,
        
        position: "absolute",
        top: "0",
     
      }
      , {
        opacity: 1,
        duration: 1,
        height: "100vh",
       

      })
    }

    if (toggle) {
      animGsap();
    }
  }, [toggle]);

  useEffect(() => {
    if (article.data) {
      for (let i = 0; i < article.data.length; i++) {
        console.log(article.data[i].id);

        if (i % 2 === 0) {
          gsap.fromTo(
            `#article${article.data[i].id} `,
            {
              x: -300,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: `#article${article.data[i].id}`,
                start: "top-=200 center",
                end: "top center",
                markers: true,
              },
            }
          );
        } else {
          gsap.fromTo(
            `#article${article.data[i].id} `,
            {
              x: 300,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: `#article${article.data[i].id}`,
                start: "top-=200 center",
                end: "top center",
                markers: true,
              },
            }
          );
        }
        gsap.fromTo(
          `#article${article.data[i].id} .description span `,
          {
            width: 0,
          },
          {
            width: "400px",
            duration: 1.25,
            scrollTrigger: {
              trigger: `#article${article.data[i].id} `,
              start: "top-=200 center",
              end: "top center",
              markers: true,
            },
          }
        );
      }
    }
  }, [article]);

  return (
    <>
      <div className="boxArticles">
        {article.data?.map((datas) => (
          <div>
            {article.data ? (
              <div className="blog-card" id={"article" + datas.id}>
                <div className="meta">
                  <div
                    className="photo"
                    style={{
                      backgroundImage: `url("http://90.113.78.165:80${datas.attributes.media.data.attributes.url}")`,
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
                  <h1> {datas.attributes.title}</h1>
                  <h2>Opening a door to the future</h2>

                  <p>
                    {" "}
                    <span></span>
                    {datas.attributes.contenu}
                  </p>
                  <p className="read-more">
                    <a href="#" onClick={() => setToggle(true)}>
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {toggle ? <OneArticle /> : null}
    </>
  );
};

export default Article;
