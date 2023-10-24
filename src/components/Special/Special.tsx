import DecorLine from "../DecorLine";
import SubTitle from "../SubTitle";
import Title from "../Title";
import styles from "./index.module.scss";
import SpecialSlider from "../SpecialSlider";
import SpecialMobile from "../SpecialMobile";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const Special = () => {
  const { width } = useWindowWidth();

  return (
    <div className={styles.specialContainer}>
      <div className={styles.titleWrapper}>
        <Title text={"Special Offer"} />
      </div>
      <div className={styles.decorWrapper}>
        <DecorLine width={241} />
      </div>
      <div className={styles.subTitleWrapper}>
        <SubTitle text={"Check out our special offer and discounts"} />
      </div>
      {width>600? <SpecialSlider  />:<SpecialMobile />}
    </div>
  );
};

export default Special;
