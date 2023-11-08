import styles from "./index.module.scss";

interface forProps {
  text: string;
  color: string;
  background: string;
  padding: string;
}

const OrangeButton = ({ text, color, background, padding,  }: forProps) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: background,
        color: color,
        padding: padding,
      }}
    >
      {text}
    </button>
  );
};

export default OrangeButton;
