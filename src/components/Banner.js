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
                    <img loading="lazy" src="https://repository-images.githubusercontent.com/380267876/0afad8b4-fe0b-4b19-89d1-98ac583bcb62" />    
                </div>

                <div>
                    <img loading="lazy" src="https://nextjs.org/static/blog/next-12/twitter-card.png" />     
                </div>

                <div>
                    <img loading="lazy" src="https://blog.haposoft.com/content/images/2022/10/Testing.png" />
                </div>

      </Carousel>
    </div>
  )
}

export default Banner;