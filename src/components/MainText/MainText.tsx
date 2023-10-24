import styles from "./index.module.scss";

const MainText = () => {
  return (
    <div className={styles.mainText}>
      <h2 className={styles.mainTitle}>
        Start your unforgettable <br />
        journey with us.
      </h2>
      <p className={styles.mainDescription}>The best travel for your jouney begins now</p>
    </div>
  );
};
export default MainText;
