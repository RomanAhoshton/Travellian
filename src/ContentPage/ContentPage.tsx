
import styles from "./index.module.scss";
import Home from "../contentPages/Home";
import Explore from "../contentPages/Explore";
import Blog from "../contentPages/Blog";
import Travel from "../contentPages/Travel";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContentPage = () => {
  return (
    <div className={styles.contentPage}>
      <Header />
      <Home />
      <Explore />
      <Blog />
      <Travel />
      <Footer />
    </div>
  );
};

export default ContentPage;
