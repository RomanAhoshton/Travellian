import React from "react";
import styles from "./index.module.scss";
import Prev from "../Prev";
import Next from "../Next";
import { useSlider } from "../../hooks/useSlider";
import { popularSlider } from "../../constants/constants";



const PopularSlider: React.FC = () => {

  const {handlePrev,handleNext,sliderRef,activeSlide,slideWidth,totalSlides,duplicatedSlides}=useSlider(popularSlider)


  return (
    <div className={styles.customSwiperContainer}>
      <div className={styles.buttonContainer}>
        <Prev onClick={handlePrev }/>
        <Next onClick={handleNext}/>
  
      </div>
      <div
        className={styles.sliderContainer}
        ref={sliderRef}
        style={{
          transform: `translateX(${-activeSlide * slideWidth}px)`,
          transition: "transform 0.8s ease",
          width: `${slideWidth * totalSlides}px`, 
        }}
      >
        {duplicatedSlides.map((item:any, index:any) => (
          <div key={index} className={styles.sliderItem}>
            <img
              src={item.image}
              alt={item.image}
              className={styles.customSwiperSlide}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSlider;
