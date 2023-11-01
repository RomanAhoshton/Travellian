import BookNow from "../../components/BookNow";
import MainText from "../../components/MainText";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";

const Home = () => {
  return (
    <div className={styles.mainImage} id="Home">
      <img src={HomeImage} alt="Home" />
      <div className={styles.mainContent}>
        <MainText />
        <BookNow />
      </div>
    </div>
  );
};

export default Home;
