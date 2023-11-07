import React from "react";
import styles from "./index.module.scss";
import Prev from "../Prev";
import Next from "../Next";
import { useSlider } from "../../hooks/useSlider";
import { specialSlider } from "../../constants/constants";
import Star from "../../icons/Star";
import OrangeButton from "../OrangeButton";

const SpecialSlider: React.FC = () => {
  const {
    handlePrev,
    handleNext,
    sliderRef,
    activeSlide,
    slideWidth,
    totalSlides,
    duplicatedSlides,
  } = useSlider(specialSlider);

  return (
    <div className={styles.customSwiperContainer}>
      <div className={styles.buttonContainer}>
        <Prev onClick={handlePrev} />
        <Next onClick={handleNext} />
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
        {duplicatedSlides.map((item: any, index: any) => (
          <div key={index} className={styles.sliderItem}>
            <img
              src={item.image}
              alt={item.image}
              className={styles.customSwiperSlide}
            />

            <div className={styles.sliderContent}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.stars}>
                <Star />
              </div>
              <p className={styles.subtitle}>{item.subtitle}</p>

              <div className={styles.priceDetails}>
                <span>{item.price.from}</span>
                <p>{item.price.number}</p>
                <OrangeButton
                  text={"Details"}
                  background="#FF7654"
                  color="#FFFFFF"
                  toggleMenu={false}
                  padding="12px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialSlider;
