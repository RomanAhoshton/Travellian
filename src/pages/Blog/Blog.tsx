import styles from "./index.module.scss";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import DecorLine from "../../components/DecorLine";
import BlogContent from "../../components/BlogContent";

const Blog = () => {
  return (
    <div className={styles.blog} id="Blog">
      <div className={styles.blogContainer}>
        <div className={styles.title}>
          <Title text="Our Blog" />
        </div>
        <div className={styles.decorLine}>
          <DecorLine width={150} />
        </div>
        <SubTitle text="An insight the incredible experience in the world" />
        <BlogContent/>
      </div>
    </div>
  );
};

export default Blog;
