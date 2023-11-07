import BookNow from "../../components/BookNow";
import MainText from "../../components/MainText";
import styles from "./index.module.scss";
import { HomeImage } from "../../constants/constants";


const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`, 
    
  };
  return (
    <div className={styles.mainImage} id="Home" style={backgroundImageStyle}>
      <div className={styles.mainContent}>
        <MainText />
        <BookNow />
      </div>
    </div>
  );
};

export default Home;
