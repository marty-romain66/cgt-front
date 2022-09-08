import gsap from 'gsap';
import React, {useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import Article from './Article';



const Test = () => {

const [data , setData] = React.useState([]);
const id = window.location.pathname.split(":")[1];

useEffect(() => {
axios.get(`https://radiant-hollows-62118.herokuapp.com/api/posts/${id}?populate=*`).then((response) => {
console.log(response.data);
setData(response.data);

}).catch((error) => {
console.log(error);
})



}, []);



    useEffect(() => {
        gsap.fromTo(".boxArt", {
            opacity: 0,
        }
        , {
            opacity: 1,
            duration: 2,
            height: "100vh",
        })


    }, []);
    

    return (
     <div className="boxArt">
     <Header/>
     {/* <div className="box1Article">
        <div className="boxImage">
            <img src={`https://radiant-hollows-62118.herokuapp.com${data.attributes.media.data.attributes.url}`} alt="" />
        </div>
        <div className="boxText">
            <h1>Test</h1>
            </div>
     </div> */}
     <Article   data={data} />
     </div>
    
    );
};

export default Test;