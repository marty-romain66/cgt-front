import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BoxCaroussel = () => {
    const [images , setImages] = useState([]);


 useEffect(() => {
    axios.get("http://90.113.78.165:80/api/images?populate=*").then(res => {
        console.log(res.data);
        // [0].attributes.image.data[0].attributes.url
        setImages("http://90.113.78.165:80" + res.data.data[0].attributes.image.data[0].attributes.url);
        console.log(res.data.data[0].attributes.image.data[0].attributes.url);
    })  
 }, [])
    return (
            
        <div className='boxCarousel'>
            <img src={images} alt="" />
        
        
            {/* {images?.map(img => (
                <img  src={"http://90.113.78.165:80" +  img.attributes.image.data[0].attributes.url} alt=""/>
            ))} */}
            
            
        </div>
    );
};

export default BoxCaroussel;