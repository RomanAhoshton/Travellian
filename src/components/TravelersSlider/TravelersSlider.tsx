import styles from "./index.module.scss";
import { travelsExperiences } from "../../constants/constants";
import Prev from "../Prev";
import Next from "../Next";
import { useSlider } from "../../hooks/useSlider";
import Star from "../../icons/Star";

const TravelersSlider = () => {
  const {
    handlePrev,
    handleNext,
    sliderRef,
    activeSlide,
    slideWidth,
    totalSlides,
    duplicatedSlides,
  } = useSlider(travelsExperiences);
  console.log(duplicatedSlides,'slides')

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
        {duplicatedSlides.map((item: any, index: number) => (
          <div key={index} className={styles.sliderItem}>
            <div className={styles.avatarWrapper}><img src={item.avatar} alt={"avatar"} /></div>
            <p className={styles.textReview}>{item.textReview}</p>
            <div className={styles.stars}><Star/></div>
            <p className={styles.fullName}>{item.fullName}</p>
            <span>{item.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelersSlider;
