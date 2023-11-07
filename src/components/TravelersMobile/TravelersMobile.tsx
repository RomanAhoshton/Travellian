import { Carousel as MobileCarousel } from "react-responsive-carousel";
import styles from "./index.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMobileSlider } from "../../hooks/useMobileSlider";
import { travelsExperiences } from "../../constants/constants";
import Prev from "../Prev";
import Next from "../Next";
import Star from "../../icons/Star";

const SpecialMobile = () => {
  const { handleNextClick, handlePrevClick, activeSlide, slider } =
    useMobileSlider(travelsExperiences);

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
        swipeable={false}
      >
        {slider.map((item: any, index: number) => (
          <div key={index} className={styles.sliderItem}>
            <div className={styles.avatarWrapper}>
              <img src={item.avatar} alt={"avatar"} />
            </div>
            <p className={styles.textReview}>{item.textReview}</p>
            <div className={styles.stars}>
              <Star />
            </div>
            <p className={styles.fullName}>{item.fullName}</p>
            <span>{item.position}</span>
          </div>
        ))}
      </MobileCarousel>

      <div className={styles.buttonContainer}>
        <Prev onClick={handlePrevClick} />
        <Next onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default SpecialMobile;
