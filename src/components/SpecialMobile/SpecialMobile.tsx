import { Carousel as MobileCarousel } from "react-responsive-carousel";
import styles from "./index.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMobileSlider } from "../../hooks/useMobileSlider";
import { specialSlider } from "../../constants/constants";
import Prev from "../Prev";
import Next from "../Next";
import OrangeButton from "../OrangeButton";
import Star from "../../icons/Star";
import { Slider } from "../../types";

const SpecialMobile = () => {
  const { handleNextClick, handlePrevClick, activeSlide, slider } =
    useMobileSlider(specialSlider,6);

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
        {slider.map((item: Slider, index: number) => (
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
                <span>{item?.price?.from}</span>
                <p>{item.price?.number}</p>
                <OrangeButton
                  text={"Details"}
                  background="#FF7654"
                  color="#FFFFFF"
                  padding="12px"
                />
              </div>
            </div>
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
