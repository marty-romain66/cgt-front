<<<<<<< HEAD
import gsap from 'gsap';
import React, {useEffect} from 'react';
import axios from 'axios';

const Article = ({data}) => {
// useEffect(() => {
//   if (data.data)
//   {
// if (window.location.href === `http://localhost:3000/article:${data.data.id}` ) {
//   gsap.to("#root",{
//     minHeight: "110vh",
//   })
// }
//   }
// else return
// }, [data]);

  return (
    <>
    {data.data? (
    <div className="box1Article">
    <div className="boxImage">
        <img src={`https://radiant-hollows-62118.herokuapp.com${data.data.attributes.media.data.attributes.url}`} alt="" />
    </div>
    <div className="boxText">
        <h1>{data.data.attributes.title}</h1>
        </div>
 </div> ) : null}
 </>
  );
};

=======
<<<<<<< HEAD
import gsap from 'gsap';
import React, {useEffect} from 'react';
import axios from 'axios';

const Article = ({data}) => {
// useEffect(() => {
//   if (data.data)
//   {
// if (window.location.href === `http://localhost:3000/article:${data.data.id}` ) {
//   gsap.to("#root",{
//     minHeight: "110vh",
//   })
// }
//   }
// else return
// }, [data]);

  return (
    <>
    {data.data? (
    <div className="box1Article">
    <div className="boxImage">
        <img src={`https://radiant-hollows-62118.herokuapp.com${data.data.attributes.media.data.attributes.url}`} alt="" />
    </div>
    <div className="boxText">
        <h1>{data.data.attributes.title}</h1>
        </div>
 </div> ) : null}
 </>
  );
};

=======
import gsap from 'gsap';
import React, {useEffect} from 'react';
import axios from 'axios';

const Article = ({data}) => {
// useEffect(() => {
//   if (data.data)
//   {
// if (window.location.href === `http://localhost:3000/article:${data.data.id}` ) {
//   gsap.to("#root",{
//     minHeight: "110vh",
//   })
// }
//   }
// else return
// }, [data]);

  return (
    <>
    {data.data? (
    <div className="box1Article">
    <div className="boxImage">
        <img src={`https://radiant-hollows-62118.herokuapp.com${data.data.attributes.media.data.attributes.url}`} alt="" />
    </div>
    <div className="boxText">
        <h1>{data.data.attributes.title}</h1>
        </div>
 </div> ) : null}
 </>
  );
};

>>>>>>> 919738e35224101ae5b77ef583f8debeb1f5058e
>>>>>>> dd2bc0808bb2e5a832a07f6642df42a9f633014a
export default Article;