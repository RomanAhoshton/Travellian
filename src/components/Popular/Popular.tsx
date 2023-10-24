import PopularSlider from "../PopularSlider";
import DecorLine from "../DecorLine";
import SubTitle from "../SubTitle";
import Title from "../Title";
import styles from "./index.module.scss"
import { useWindowWidth } from "../../hooks/useWindowWidth";
import PopularMobile from "../PopularMobile";
import { popularSlider } from "../../constants/constants";

const Popular = () => {
  const{width}=useWindowWidth()
  console.log(width,"width")


  return (
    <>
      <div className={styles.titleWrapper}>
        <Title text={"Popular Destinations"} />
      </div>
      <DecorLine width={365} />
      <div className={styles.subTitleWrapper}>
        <SubTitle
          text={
            "Most popular destinations around the world, from historical places to natural wonders."
          }
        />
      </div>
      {
        width>600? <PopularSlider />:<PopularMobile/>
      }

    </>
  );
};


export default Popular
