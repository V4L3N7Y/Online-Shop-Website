import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-index'></div>

      <Carousel
       autoPlay
       infiniteLoop
       showStatus={false}
       showIndicators={false}
       showThumbs={false}
       showArrows={false}
       interval={5000}
       >

                <div>
                    <img loading="lazy" src="https://c8.alamy.com/comp/G2X952/summer-sale-banner-1500x600-pixel-vector-illustration-G2X952.jpg" />    
                </div>

                <div>
                    <img loading="lazy" src="https://c8.alamy.com/comp/G21YMD/cheap-flight-to-europe-1500x600-banner-vector-illustration-G21YMD.jpg" />     
                </div>

                <div>
                    <img loading="lazy" src="https://c8.alamy.com/comp/G21YME/30-days-free-trial-1500x600-banner-vector-illustration-G21YME.jpg" />
                </div>

      </Carousel>
    </div>
  )
}

export default Banner;