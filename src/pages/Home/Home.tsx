import BookNow from "../../components/BookNow";
import MainText from "../../components/MainText";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.mainImage} id="Home">
      <div className={styles.mainContent}>
        <MainText />
        <BookNow />
      </div>
    </div>
  );
};

export default Home;
