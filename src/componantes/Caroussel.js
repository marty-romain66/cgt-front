import React, { useEffect } from 'react';
import { gsap } from "gsap";

const Caroussel = () => {
    useEffect(() => {
        gsap.timeline({repeat: 10})
        
        .to(".image1", 
        {
            delay: 4,
            duration: 1.5,
            marginLeft: "100%",

           })
           .to(".image1",
           {
               zIndex: 0,
           })
              .to(".image1",{
                duration: 0.1,
                margin: 0,
              })
                .to(".image2",{ 
                    duration: 1.5,
                    marginLeft: "100%",
                })
                .to(".image2",{
                    zIndex: -1,
                })
                .to(".image2",{

                    margin: 0,
                })

    }, []);


    return (
       <div className="boxCaroussel">
        <img className='image1' src="https://www.1jour1actu.com/wp-content/uploads/2019/12/UNE_MANIFESTAION_PARIS.jpg" alt="" />^
        <img className='image2' src="https://media.ouest-france.fr/v1/pictures/MjAyMjA0NzY1Nzk1MjAwM2E0OTMyZmFhYzEzZDk5OWEwMDk5Yzg?width=480&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=3f691488f8320be04f730fa66165ab33f100bccf9b0dc9048ebd6fef5ef7ba82" alt="" />
       </div>
    );
};

export default Caroussel;