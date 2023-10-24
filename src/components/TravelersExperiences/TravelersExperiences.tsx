import styles from "./index.module.scss";
import Title from "../Title";
import SubTitle from "../SubTitle";
import DecorLine from "../DecorLine";
import TravelersSlider from "../TravelersSlider";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import TravelersMobile from "../TravelersMobile";

const TravelersExperiences = () => {
    const {width}=useWindowWidth()


  return (
    <div className={styles.experiencesContainer}>
      <div className={styles.titleWrapper}>
        <Title text={"Traveler’s Experiences"} />
      </div>
      <div className={styles.decorWrapper}>
        <DecorLine width={347} />
      </div>

      <div className={styles.subTitleWrapper}>
        <SubTitle text={"Here some awesome feedback from our travelers"} />

      </div>

      {width>600?<TravelersSlider/>:<TravelersMobile/>}
    </div>
  );
};

export default TravelersExperiences;
