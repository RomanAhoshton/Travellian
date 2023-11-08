import Popular from "../../components/Popular";
import Special from "../../components/Special";
import styles from "./index.module.scss";


const Explore = () => {
  return (
    <div className={styles.explore} id="Explore">
      <div className={styles.exploreContainer}>
        <Popular />
        <Special />
      </div>
    </div>
  );
};

export default Explore;
