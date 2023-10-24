import DecorLine from "../DecorLine";
import SubTitle from "../SubTitle";
import Title from "../Title";
import styles from "./index.module.scss";
import DestinationSlider from "../DestinationSlider";
import DestinationMobile from "../DestinationMobile";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const DestinationGallery = () => {
  const { width } = useWindowWidth();

  return (
    <div className={styles.destinationContainer}>
      <div className={styles.titleWrapper}>
        <Title text={"Destination Gallery"} />
      </div>
      <div className={styles.decorWrapper}>
        <DecorLine width={283} />
      </div>
      <div className={styles.subTitleWrapper }>
        <SubTitle text="Our photo gallery on trip" />
      </div>
      {width > 600 ? <DestinationSlider /> : <DestinationMobile />}
    </div>
  );
};

export default DestinationGallery;
