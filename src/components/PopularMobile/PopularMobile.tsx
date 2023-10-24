import React from 'react';
import { Carousel as MobileCarousel } from 'react-responsive-carousel';
import styles from "./index.module.scss"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMobileSlider } from '../../hooks/useMobileSlider';
import { popularSlider } from '../../constants/constants';
import Prev from '../Prev';
import Next from '../Next';



const PopularMobile = () => {
  const { handleNextClick, handlePrevClick, activeSlide, slider } = useMobileSlider(popularSlider);

  return (
    <div className={styles.carouselContainer}>
      <MobileCarousel
        width={350}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={activeSlide}
        infiniteLoop={true}
        showStatus={false} 
    
      >
        {slider.map((item:any, index:number) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </MobileCarousel>

      <div className={styles.buttonContainer}>
      <Prev onClick={handlePrevClick}/>
      <Next onClick={handleNextClick}/>

      </div>
    </div>
  );
};

export default  PopularMobile ;
